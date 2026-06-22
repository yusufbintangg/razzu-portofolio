// upload-videos.js
// Cara pakai:
//   npm install cloudinary
//   node upload-videos.js
//
// Isi dulu CLOUD_NAME, API_KEY, API_SECRET di bawah,
// atau set lewat env var CLOUDINARY_URL.

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dflurcp1z',
  api_key: '538546986812362',
  api_secret: 'r92qwkHJJRGbF970sUH_UkJJ6C4',
});

const FOLDER = __dirname; // folder tempat video berada (folder yang sama dengan script ini)
const CLOUDINARY_FOLDER = 'razzu-portfolio'; // folder tujuan di Cloudinary, ganti sesuai mau

async function uploadOne(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  console.log(`⏳ Uploading: ${fileName}...`);

  try {
    const result = await cloudinary.uploader.upload_large(filePath, {
      resource_type: 'video',
      chunk_size: 6000000, // 6MB per chunk
      folder: CLOUDINARY_FOLDER,
      public_id: fileName.replace(/\s+/g, '-').toLowerCase(), // biar slug rapi, "KONTEN 1" -> "konten-1"
      overwrite: true,
    });
    console.log(`✅ Done: ${fileName} -> ${result.secure_url}`);
    console.log('DEBUG full result:', JSON.stringify(result, null, 2));
    return { fileName, success: true, url: result.secure_url, raw: result };
  } catch (err) {
    console.error(`❌ Failed: ${fileName} ->`, err.message || err);
    return { fileName, success: false, error: err.message || String(err) };
  }
}

async function main() {
  const files = fs
    .readdirSync(FOLDER)
    .filter((f) => f.toLowerCase().endsWith('.mp4'));

  if (files.length === 0) {
    console.log('Tidak ada file .mp4 ditemukan di folder ini.');
    return;
  }

  console.log(`Ditemukan ${files.length} video. Mulai upload satu-satu...\n`);

  const results = [];
  // Upload satu-satu (sequential) biar tidak membanjiri bandwidth/koneksi
  for (const file of files) {
    const fullPath = path.join(FOLDER, file);
    const result = await uploadOne(fullPath);
    results.push(result);
  }

  console.log('\n=== RINGKASAN ===');
  results.forEach((r) => {
    if (r.success) {
      console.log(`✅ ${r.fileName}: ${r.url}`);
    } else {
      console.log(`❌ ${r.fileName}: ${r.error}`);
    }
  });

  // simpan hasil ke file json biar bisa dicek/dipakai lagi
  fs.writeFileSync(
    path.join(FOLDER, 'upload-results.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('\nHasil lengkap disimpan di upload-results.json');
}

main();
