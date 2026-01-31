<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BeritaSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('beritas')->insert([
            [
                'judul' => 'Berita Pertama',
                'slug' => 'berita-pertama',
                'konten' => 'Ini adalah konten berita pertama.',
                'status' => 'publish',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'judul' => 'Berita Kedua',
                'slug' => 'berita-kedua',
                'konten' => 'Ini adalah konten berita kedua.',
                'status' => 'publish',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
