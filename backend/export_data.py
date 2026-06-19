import json
import os
# pyrefly: ignore [missing-import]
from sqlalchemy.orm import sessionmaker
from app.database import engine
from app.models import Promotion, Service, Testimonial, GalleryImage, Reservation, Contact, AdminUser
from app.utils import minio_client, MINIO_BUCKET

def export_database_and_minio():
    print("Connecting to the database...")
    Session = sessionmaker(bind=engine)
    session = Session()

    data = {}

    # Helper function to convert SQLAlchemy object to dict
    def to_dict(obj):
        d = {}
        for column in obj.__table__.columns:
            val = getattr(obj, column.name)
            # Serialize dates and datetimes
            if hasattr(val, 'isoformat'):
                val = val.isoformat()
            d[column.name] = val
        return d

    print("Exporting admin users...")
    data['admin_users'] = [to_dict(x) for x in session.query(AdminUser).all()]

    print("Exporting promotions...")
    data['promotions'] = [to_dict(x) for x in session.query(Promotion).all()]

    print("Exporting services...")
    data['services'] = [to_dict(x) for x in session.query(Service).all()]

    print("Exporting testimonials...")
    data['testimonials'] = [to_dict(x) for x in session.query(Testimonial).all()]

    print("Exporting gallery...")
    data['gallery'] = [to_dict(x) for x in session.query(GalleryImage).all()]

    print("Exporting reservations...")
    data['reservations'] = [to_dict(x) for x in session.query(Reservation).all()]

    print("Exporting contacts...")
    data['contacts'] = [to_dict(x) for x in session.query(Contact).all()]

    session.close()

    # Save to zentonez_data.json
    data_file = 'zentonez_data.json'
    print(f"Writing database records to {data_file}...")
    with open(data_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
    print("Database export completed successfully!")

    # MinIO Export
    if not minio_client:
        print("Error: MinIO client not initialized. Skipping image export.")
        return

    export_dir = "minio_export"
    if not os.path.exists(export_dir):
        print(f"Creating directory '{export_dir}'...")
        os.makedirs(export_dir)

    print(f"Connecting to MinIO bucket '{MINIO_BUCKET}' to download images...")
    try:
        objects = minio_client.list_objects(MINIO_BUCKET)
        for obj in objects:
            file_name = obj.object_name
            dest_path = os.path.join(export_dir, file_name)
            print(f"  Downloading {file_name} -> {dest_path}...")
            minio_client.fget_object(MINIO_BUCKET, file_name, dest_path)
        print("MinIO image export completed successfully!")
    except Exception as e:
        print(f"Error exporting MinIO images: {e}")

if __name__ == "__main__":
    export_database_and_minio()
