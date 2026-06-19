# Zen Tonez Beauty Parlour & Salon 🌿✨

A premium, high-performance, full-stack web application for **Zen Tonez**, a luxury beauty salon. This project features a React frontend with state-of-the-art animations, a curated design system, and a Python FastAPI backend connected to PostgreSQL and MinIO object storage for a seamless user and admin experience.

---

## 🚀 Technology Stack

| Component | Category | Tools |
| :--- | :--- | :--- |
| **Frontend** | **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| | **Language** | [TypeScript](https://www.typescriptlang.org/) |
| | **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS |
| | **Animations** | [GSAP](https://gsap.com/), [Framer Motion](https://framer.com/motion/), [React Spring](https://www.react-spring.dev/) |
| | **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| | **Icons** | [Lucide React](https://lucide.dev/) |
| | **Routing** | [React Router Dom v7](https://reactrouter.com/) |
| **Backend** | **Framework** | [FastAPI](https://fastapi.tiangolo.com/) |
| | **Language** | [Python 3.10+](https://www.python.org/) |
| | **Database** | [PostgreSQL](https://www.postgresql.org/) + [SQLAlchemy](https://www.sqlalchemy.org/) |
| | **Storage** | [MinIO Object Storage](https://min.io/) (S3 Compatible) |

---

## 🎨 Design System & Animations

### 🌈 Color Palette (Luxury Gold & Cream)
Designed for a premium boutique aesthetic with rich, high-contrast combinations:
- **Premium Gold** (`#C9A24A`): Primary brand color, buttons, and high-impact accents.
- **Gold Container** (`#E5C98E`): Lighter gold for backgrounds and soft gradients.
- **Secondary Cream** (`#D9C3A5`): Warm supporting elements and elegant dividers.
- **Deep Navy** (`#1F3A5F`): High-contrast backgrounds and branding accents.
- **Background (Luxury Cream)** (`#F4F1EC`): Main page background for a professional, clean look.
- **Charcoal Typography** (`#2B2B2B`): Core text color for maximum readability.

### 🖋️ Typography (Fluid Scaling)
Using a fluid scale implemented via CSS `clamp()` to scale perfectly from mobile devices to ultra-wide displays:
- **Poppins**: Primary Headings (H1, H2, H3) - Bold, commanding, and modern.
- **Montserrat**: Secondary Headings (H4, H5, H6) - Elegant and professional.
- **Inter**: Body Text & UI Elements - Clean, readable, and balanced.
- **Pacifico**: Accent Phrases & Hero Subtexts - Script, friendly, and boutique-style.
- **Gelasio**: Narrative & Description Text - Serif font for a sophisticated literary feel.

### 🪄 Micro-Animations & Professional Effects
- **Lenis Smooth Scroll**: Cinematic, inertia-based smooth scrolling.
- **3D Kinetic Hover (Sparkle Canvas)**: Interactive sparkle particles and character displacement on hover.
- **Shuffle Grids**: Fluid, randomized image transitions in hero sections using Framer Motion.
- **Interactive Buttons**: Premium 3D transforms, glassmorphic backdrop blurs, and physics-based scaling.

---

## 🚀 Setup & Running Guide

Ensure you have **Python 3.10+**, **Node.js 18+**, **PostgreSQL**, and **MinIO** installed on your system before proceeding.

### 1️⃣ Database Setup (PostgreSQL & pgAdmin)
1. Open **pgAdmin** on your computer.
2. In the left browser panel, expand **Servers** -> **PostgreSQL (your version)**.
3. Enter your superuser password when prompted.
4. Right-click on **Databases** -> **Create** -> **Database...**
5. Under the **General** tab:
   * Set **Database** field to **`zentonez`**
   * Set **Owner** to **`postgres`**
6. Click **Save** to create the database.
7. Ensure your PostgreSQL master user password is set to `1234` (or update the `DATABASE_URL` in `backend/.env` or `backend/app/database.py`).


### 2️⃣ Object Storage Setup (MinIO)
1. Download [MinIO Server for Windows](https://dl.min.io/server/minio/release/windows-amd64/minio.exe).
2. Save it to a folder, e.g., `D:\minio` or `C:\minio`.
3. Create a `data\upload` subdirectory inside that folder.
4. Run the MinIO server in a command prompt or terminal window:
   ```cmd
   D:\minio\minio.exe server D:\minio\data\upload --console-address ":9001"
   ```
5. Open the Web Dashboard at [http://localhost:9001](http://localhost:9001) using:
   - **Username:** `minioadmin`
   - **Password:** `minioadmin`
6. Create a bucket named **`zentonez`** and set its **Access Policy** to **Public**.

---

### 3️⃣ Backend Setup (FastAPI)
1. Open a new terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv venv
   # On Windows (PowerShell/CMD):
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
4. **Seed the database** (this imports initial services, testimonials, gallery metadata, and default admin credentials):
   ```bash
   python seed_db.py
   ```
5. **Import default images into MinIO** (uploads all design assets/photos to the `zentonez` bucket):
   ```bash
   python import_minio.py
   ```
6. Start the backend development server:
   ```bash
   uvicorn app.main:app --reload
   ```


---

### 4️⃣ Frontend Setup (React/Vite)
1. Open another terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

Now open [http://localhost:5173](http://localhost:5173) in your browser to view the application!

---

### 🔄 Exporting Admin Modifications (Seed Backup)
If you add or update services, testimonials, or gallery images through the Admin Panel and want to save them back into your codebase (for seed backups):
1. Ensure your local PostgreSQL database and MinIO server are running.
2. Run the export script inside the `backend` directory:
   ```bash
   python export_data.py
   ```
This will automatically update `zentonez_data.json` and download the new images from MinIO into the `minio_export` folder, making them ready to commit.

---

## 🔑 Credentials

* **Web App URL**: [http://localhost:5173](http://localhost:5173)
* **Admin Portal**: [http://localhost:5173/admin](http://localhost:5173/admin)
  * **Username**: `admin`
  * **Password**: `admin`
* **API Documentation (Swagger UI)**: [http://localhost:8081/docs](http://localhost:8081/docs)
* **MinIO Console**: [http://localhost:9001](http://localhost:9001) (`minioadmin` / `minioadmin`)

---

## 📂 Project Structure

```bash
zentonz/
├── backend/                  # FastAPI Application
│   ├── app/
│   │   ├── routers/          # API route handlers (services, gallery, admin, etc.)
│   │   ├── database.py       # SQLAlchemy database connection config
│   │   ├── models.py         # SQLAlchemy Database models
│   │   └── schemas.py        # Pydantic data serialization schemas
│   ├── seed_db.py            # Initial database seeder script
│   └── import_minio.py       # Local media to MinIO upload script
│
├── frontend/                 # React Application (Vite + TypeScript)
│   ├── src/
│   │   ├── assets/           # Local optimized images & branding assets
│   │   ├── components/       # Reusable UI components (layout, services, home)
│   │   ├── pages/            # View pages (Home, Services, Gallery, Admin)
│   │   ├── lib/              # Utility functions & Lenis smooth scrolling config
│   │   └── index.css         # Core Design System, fluid typography rules
│   └── package.json
└── README.md                 # Project Documentation
```
