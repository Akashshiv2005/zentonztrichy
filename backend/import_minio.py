import os
import json
from minio import Minio
from minio.error import S3Error

# Initialize MinIO client
minio_client = Minio(
    "localhost:9000",
    access_key="minioadmin",
    secret_key="minioadmin",
    secure=False
)

bucket_name = "zentonez"
export_dir = "minio_export"

print("Setting up MinIO...")

try:
    # Create bucket if it doesn't exist
    if not minio_client.bucket_exists(bucket_name):
        minio_client.make_bucket(bucket_name)
        print(f"Created bucket '{bucket_name}'")
        
        # Set public read policy
        policy = {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {"AWS": "*"},
                    "Action": ["s3:GetBucketLocation", "s3:ListBucket", "s3:ListBucketMultipartUploads"],
                    "Resource": f"arn:aws:s3:::{bucket_name}"
                },
                {
                    "Effect": "Allow",
                    "Principal": {"AWS": "*"},
                    "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject", "s3:ListMultipartUploadParts", "s3:AbortMultipartUpload"],
                    "Resource": f"arn:aws:s3:::{bucket_name}/*"
                }
            ]
        }
        minio_client.set_bucket_policy(bucket_name, json.dumps(policy))
        print("Set public read/write policy on bucket")

    # Import files
    if not os.path.exists(export_dir):
        print(f"Error: Directory '{export_dir}' not found. Cannot import images.")
        exit(1)

    count = 0
    for filename in os.listdir(export_dir):
        file_path = os.path.join(export_dir, filename)
        if os.path.isfile(file_path):
            minio_client.fput_object(bucket_name, filename, file_path)
            print(f"Imported: {filename}")
            count += 1
            
    print(f"Successfully imported {count} images into MinIO!")

except S3Error as e:
    print(f"MinIO Error: {e}")
except Exception as e:
    print(f"Error importing MinIO data: {e}")
