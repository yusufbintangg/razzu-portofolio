"""
upload_videos.py

Cara pakai:
    pip install cloudinary
    python upload_videos.py

Isi dulu CLOUD_NAME, API_KEY, API_SECRET di bawah.
"""

import os
import json
import cloudinary
import cloudinary.uploader

cloudinary.config(
    cloud_name="dflurcp1z",
    api_key="538546986812362",
    api_secret="r92qwkHJJRGbF970sUH_UkJJ6C4",
)


FOLDER = os.path.dirname(os.path.abspath(__file__))  # folder tempat script ini berada
CLOUDINARY_FOLDER = "razzu-portfolio"  # folder tujuan di Cloudinary, ganti sesuai mau


def upload_one(file_path):
    file_name = os.path.splitext(os.path.basename(file_path))[0]
    print(f"⏳ Uploading: {file_name}...")

    try:
        result = cloudinary.uploader.upload_large(
            file_path,
            resource_type="video",
            chunk_size=6_000_000,  # 6MB per chunk
            folder=CLOUDINARY_FOLDER,
            public_id=file_name.replace(" ", "-").lower(),  # "KONTEN 1" -> "konten-1"
            overwrite=True,
        )
        secure_url = result.get("secure_url")
        print(f"✅ Done: {file_name} -> {secure_url}")
        return {"fileName": file_name, "success": True, "url": secure_url}
    except Exception as e:
        print(f"❌ Failed: {file_name} -> {e}")
        return {"fileName": file_name, "success": False, "error": str(e)}


def main():
    files = [f for f in os.listdir(FOLDER) if f.lower().endswith(".mp4")]

    if not files:
        print("Tidak ada file .mp4 ditemukan di folder ini.")
        return

    print(f"Ditemukan {len(files)} video. Mulai upload satu-satu...\n")

    results = []
    for file in files:
        full_path = os.path.join(FOLDER, file)
        results.append(upload_one(full_path))

    print("\n=== RINGKASAN ===")
    for r in results:
        if r["success"]:
            print(f"✅ {r['fileName']}: {r['url']}")
        else:
            print(f"❌ {r['fileName']}: {r['error']}")

    with open(os.path.join(FOLDER, "upload-results.json"), "w") as f:
        json.dump(results, f, indent=2)
    print("\nHasil lengkap disimpan di upload-results.json")


if __name__ == "__main__":
    main()
