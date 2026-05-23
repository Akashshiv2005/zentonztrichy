import { useRef, useState, useEffect, useCallback } from 'react';
import type { ReactNode, MouseEventHandler, UIEvent, FC } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

interface AnimatedListProps<T> {
  items?: T[];
  onItemSelect?: (item: T, index: number) => void;
  renderItem?: (item: T, index: number, isSelected: boolean) => ReactNode;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
  isSticky?: boolean; // New prop for sticky stacking mode
}

function AnimatedList<T>({
  items = [],
  onItemSelect,
  renderItem,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
  isSticky = false
}: AnimatedListProps<T>) {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const handleItemMouseEnter = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleItemClick = useCallback(
    (item: T, index: number) => {
      setSelectedIndex(index);
      if (onItemSelect) {
        onItemSelect(item, index);
      }
    },
    [onItemSelect]
  );

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (isSticky) return;
    const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLDivElement;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (!enableArrowNavigation || isSticky) return; // Disable arrow nav in sticky mode for now as it's page-level
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation, isSticky]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current || isSticky) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth'
        });
      }
    }
    // Using requestAnimationFrame to avoid cascading renders warning
    const handle = requestAnimationFrame(() => {
      setKeyboardNav(false);
    });
    return () => cancelAnimationFrame(handle);
  }, [selectedIndex, keyboardNav, isSticky]);

  useEffect(() => {
    if (!isSticky || !listRef.current) return;
    
    let ticking = false;
    const onWindowScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const itemsElements = listRef.current?.querySelectorAll('[data-index]');
          if (itemsElements) {
            let currentIdx = 0;
            itemsElements.forEach((item, idx) => {
              const rect = item.getBoundingClientRect();
              if (rect.top <= 250) {
                currentIdx = idx;
              }
            });
            setSelectedIndex(currentIdx);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onWindowScroll, { passive: true });
    onWindowScroll(); // Initial check
    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [isSticky]);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={listRef}
        className={`${isSticky
            ? 'flex flex-col gap-0' // Sticky mode layout
            : 'max-h-[600px] overflow-y-auto p-4 custom-scrollbar'
          } ${!isSticky && displayScrollbar
            ? '[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-surface/10 [&::-webkit-scrollbar-thumb]:bg-primary/20 [&::-webkit-scrollbar-thumb]:rounded-[4px]'
            : !isSticky ? 'scrollbar-hide' : ''
          }`}
        onScroll={handleScroll}
        style={!isSticky ? {
          scrollbarWidth: displayScrollbar ? 'thin' : 'none',
          scrollbarColor: 'var(--color-primary-20) transparent'
        } : {}}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={isSticky ? "sticky" : ""}
            style={isSticky ? { top: `${index * 40 + 100}px`, zIndex: index } : {}}
          >
            <AnimatedItem
              delay={isSticky ? 0 : 0.1}
              index={index}
              onMouseEnter={() => handleItemMouseEnter(index)}
              onClick={() => handleItemClick(item, index)}
            >
              {renderItem ? (
                renderItem(item, index, selectedIndex === index)
              ) : (
                <div className={`p-4 bg-surface-alt rounded-xl border border-white/5 ${selectedIndex === index ? 'bg-primary/10 border-primary/20' : ''} ${itemClassName}`}>
                  <p className="text-white m-0">{String(item)}</p>
                </div>
              )}
            </AnimatedItem>
          </div>
        ))}
      </div>
      {showGradients && !isSticky && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-linear-to-b from-surface-dim to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-linear-to-t from-surface-dim to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
}

export default AnimatedList;
