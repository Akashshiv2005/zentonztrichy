import os
from minio import Minio

# Initialize MinIO client
minio_client = Minio(
    "localhost:9000",
    access_key="minioadmin",
    secret_key="minioadmin",
    secure=False
)

bucket_name = "zentonez"
export_dir = "minio_export"

# Create export directory
if not os.path.exists(export_dir):
    os.makedirs(export_dir)

try:
    if minio_client.bucket_exists(bucket_name):
        objects = minio_client.list_objects(bucket_name)
        count = 0
        for obj in objects:
            file_path = os.path.join(export_dir, obj.object_name)
            minio_client.fget_object(bucket_name, obj.object_name, file_path)
            print(f"Exported: {obj.object_name}")
            count += 1
        print(f"Successfully exported {count} images to the '{export_dir}' folder!")
    else:
        print(f"Bucket '{bucket_name}' does not exist.")
except Exception as e:
    print(f"Error exporting MinIO data: {e}")
