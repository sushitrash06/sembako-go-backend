-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 30 Des 2020 pada 15.51
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skripsi-sembako-go`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `Username`, `Password`) VALUES
(10, 'admin_chan', '$2b$10$2B0fakegpDJB1sHDN3EoouFZfA/HzEvrli5cApLfGlvSVKfgDRBhC');

-- --------------------------------------------------------

--
-- Struktur dari tabel `keranjangs`
--

CREATE TABLE `keranjangs` (
  `id_keranjang` int(11) NOT NULL,
  `id_produk` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `Nama_Produk` varchar(255) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Nama_toko` varchar(255) DEFAULT NULL,
  `Deskripsi` varchar(255) DEFAULT NULL,
  `status_keranjang` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `keranjangs`
--

INSERT INTO `keranjangs` (`id_keranjang`, `id_produk`, `id_user`, `Nama_Produk`, `Price`, `Username`, `Nama_toko`, `Deskripsi`, `status_keranjang`) VALUES
(1, 12, 19, 'Beras', 15000, 'jarome', 'nihongomantappu', 'jdshajdh', 'dalam keranjang'),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL, NULL, 'Nihongo Mantappu', NULL, NULL),
(5, 50, 62, 'Beras Cianjur', NULL, 'jarome', 'Nihongo Mantappu', 'Beras', NULL),
(6, 50, 62, 'Beras Cianjur', NULL, 'jarome', 'Nihongo Mantappu', 'Beras', NULL),
(7, 50, 62, 'Beras Cianjur', NULL, 'jarome', 'Nihongo Mantappu', 'Beras', NULL),
(8, 50, 62, 'Beras Cianjur', NULL, 'jarome', 'Nihongo Mantappu', 'Beras', NULL),
(9, 50, 62, 'Beras Cianjur', NULL, 'jarome', 'Nihongo Mantappu', 'Beras', 'dalam keranjang'),
(10, 50, 62, 'Beras Cianjur', 500000, 'jarome', 'Nihongo Mantappu', 'Beras', 'dalam keranjang'),
(13, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(18, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(19, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(20, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(21, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(22, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(23, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(24, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(26, NULL, 63, NULL, NULL, NULL, NULL, NULL, NULL),
(36, 51, 63, 'Minyak Goreng Filma', 25000, 'jarome', 'Nihongo Mantappu', 'Minyak goreng 2 liter', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesanans`
--

CREATE TABLE `pesanans` (
  `id_pesanan` int(11) NOT NULL,
  `Tgl_order` datetime DEFAULT NULL,
  `Nama_pengguna` text NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `Username` text NOT NULL,
  `pesanan` text NOT NULL,
  `Nama_toko` text DEFAULT NULL,
  `Price` int(11) NOT NULL,
  `Total_bayar` int(11) DEFAULT NULL,
  `jumlah_pesanan` int(11) DEFAULT NULL,
  `Alamat_kirim` text DEFAULT NULL,
  `Nomer_hp` int(11) NOT NULL,
  `Catatan` text DEFAULT NULL,
  `Status` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pesanans`
--

INSERT INTO `pesanans` (`id_pesanan`, `Tgl_order`, `Nama_pengguna`, `id_user`, `Username`, `pesanan`, `Nama_toko`, `Price`, `Total_bayar`, `jumlah_pesanan`, `Alamat_kirim`, `Nomer_hp`, `Catatan`, `Status`) VALUES
(12, '2020-12-15 10:06:30', 'Gerald', 63, 'dedi_cayank_yati', 'Mentega Mantap', 'azfalfa', 7500, 30000, 8, 'Jalan Dieng VII', 12345678, 'Yang banyak ya mas', 'Cancel'),
(13, '2020-12-15 10:17:04', 'Gerald', 63, 'dedi_cayank_yati', 'Mentega Mantap', 'azfalfa', 7500, 60000, 8, 'Jalan Sejahtera', 12345678, 'Yang banyak ya mas atas nama Pak bambang', 'Cancel'),
(14, '2020-12-10 19:28:24', 'Gerald', 63, 'nanimo_nanimo', 'Beras Cianjur Maknyos', 'Nanimo Shoppu', 350000, 350000, 1, 'Jalan Sejahtera', 12345678, 'Yang banyak ya mas atas nama Pak bambang', 'Belum dikirim'),
(15, '2020-12-10 21:41:18', 'Gerald', 63, 'nanimo_nanimo', 'Beras Cianjur Maknyos', 'Nanimo Shoppu', 350000, 1400000, 4, 'Jalan majapahit', 12345678, 'Yang banyak ya mas', 'Belum dikirim'),
(16, '2020-12-11 19:39:53', 'Gerald', 63, 'dedi_cayank_yati', 'Mentega Mantap', 'azfalfa', 7500, 30000, 4, 'Jalan Sejahtera', 89678900, 'Yang banyak ya mas', 'Belum dikirim'),
(17, '2020-12-15 09:07:58', 'Gerald', 63, 'jarome', 'Beras Cianjur', 'Nihongo Mantappu', 500000, 2000000, 4, 'Jalan Sejahtera', 12345678, 'Yang banyak ya mas mienya', 'diterima'),
(18, '2020-12-15 09:12:34', 'Gerald', 63, 'jarome', 'Minyak Goreng Filma', 'Nihongo Mantappu', 25000, 125000, 5, 'Jalan Sejahtera', 12345678, 'Yang banyak ya mas mienya', 'diterima'),
(19, '2020-12-16 11:57:00', 'Gerald', 63, 'jarome', 'Beras Cianjur', 'Nihongo Mantappu', 500000, 1000000, 2, 'Jalan Dieng VII', 12345678, 'Yang banyak ya mas atas nama Pak bambang', 'diterima'),
(20, '2020-12-16 11:51:30', 'Gerald', 63, 'nanimo_nanimo', 'Beras Cianjur Maknyos', 'Nanimo Shoppu', 350000, 700000, 2, 'Jalan Dieng VII', 12345678, 'Yang banyak ya mas mienya', 'Belum dikirim'),
(21, '2020-12-16 11:57:04', 'Gerald', 63, 'jarome', 'Minyak Goreng Filma', 'Nihongo Mantappu', 25000, 175000, 7, 'Jalan Sejahtera', 12345678, 'Yang banyak ya mas atas nama Pak bambang', 'diterima'),
(22, '2020-12-16 11:52:42', 'Gerald', 63, 'jarome', 'Beras Cianjur', 'Nihongo Mantappu', 500000, 2000000, 4, 'Jalan majapahit', 12345678, 'Yang banyak ya mas mienya', 'Dikirim'),
(23, '2020-12-16 11:56:37', 'Gerald', 63, 'jarome', 'Minyak Goreng Filma', 'Nihongo Mantappu', 25000, 100000, 4, 'Jalan Dieng VII', 12345678, 'Yang banyak ya mas', 'Cancel'),
(24, '2020-12-17 23:19:28', 'Gerald', 63, 'jarome', 'Beras Cianjur', 'Nihongo Mantappu', 500000, 1500000, 3, 'Jalan majapahit', 12345678, 'Yang banyak ya mas', 'Dikirim'),
(25, '2020-12-17 23:19:45', 'Gerald', 63, 'jarome', 'Beras Cianjur', 'Nihongo Mantappu', 500000, 2000000, 4, 'Jalan Dieng VII', 2147483647, 'm', 'Dikirim');

-- --------------------------------------------------------

--
-- Struktur dari tabel `produks`
--

CREATE TABLE `produks` (
  `id_produk` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `Username` text NOT NULL,
  `Nama_toko` varchar(255) DEFAULT NULL,
  `Nama_Produk` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `Deskripsi` varchar(255) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Jumlah_stock` int(11) DEFAULT NULL,
  `StatusBarang` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `produks`
--

INSERT INTO `produks` (`id_produk`, `id_user`, `Username`, `Nama_toko`, `Nama_Produk`, `image`, `Deskripsi`, `Price`, `Jumlah_stock`, `StatusBarang`) VALUES
(40, 44, 'nanimo_nanimo', 'Nanimo Shoppu', 'Blue Band', 'fd8a36d1f01e497f02ff960fe975f47f.jpg', 'Blueband mentega mantap', 7500, 14, 'aman'),
(47, 19, 'jarome', 'Nihongo Mantappu', 'Beras Cianjur', 'd0f98cadf10d252811d5cc91e7cd8903.jpg', 'beras 25kg', 500000, 12, 'undefined'),
(49, 45, 'dedi_cayank_yati', 'azfalfa', 'Mentega Mantap', '957757b4c71535e16833b7d173b102a8.jpg', 'Mentega 20g', 7500, 600, 'aman'),
(50, 19, 'jarome', 'Nihongo Mantappu', 'Beras Cianjur', '89a07907a3a5decf90515ce89b2f7332.jpg', 'Beras', 500000, 17, 'undefined'),
(51, 19, 'jarome', 'Nihongo Mantappu', 'Minyak Goreng Filma', '17f1f1e8feacd00a8f16c3783add703f.jpg', 'Minyak goreng 2 liter', 25000, 90, 'undefined'),
(58, 19, 'jarome', 'Nihongo Mantappu jiwa', 'Minyak Goreng Filma', '630bb8b1ee84fd4e826ecaa9b7f0a0a3.jpg', 'iuiuiuiuiuiuiuiui', 25000, 12, 'aman');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `Nama_pengguna` text DEFAULT NULL,
  `Nama_toko` text DEFAULT NULL,
  `Username` text DEFAULT NULL,
  `Password` text DEFAULT NULL,
  `Alamat` text NOT NULL,
  `Kota` text NOT NULL,
  `Roles` text NOT NULL,
  `Foto` varchar(255) DEFAULT NULL,
  `created` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_user`, `Nama_pengguna`, `Nama_toko`, `Username`, `Password`, `Alamat`, `Kota`, `Roles`, `Foto`, `created`) VALUES
(19, 'Jerome polin sijabat', 'Nihongo Mantappu jiwa', 'jarome', '$2b$10$GlAq1wMJD7n22pG/lQfLNOA1nvnGSPER97GZvm74gO8o8B0uFisZy', 'Jalan Tokyo Kemana aja, cibitung', 'Bekasi', 'Penjual', '9ca1508d12f756bbae922f2d960d1894.png', '2020-08-22 19:43:21'),
(42, 'Asih', NULL, 'odading', '$2b$10$s0rQ8Sn/9zS5syPBYZX8KepH0HXLe2jw3GhAJp5.zHfs7NMv4P9qm', 'Jalan Sukatani', '', 'Pembeli', '', '2020-09-15 09:58:07'),
(43, 'Nana', '', 'nana_nini', '$2b$10$j4kRO5JGGrY28jf2ToOZ6upSnwNJ97s.rvW8hHZqPEtw50EhETJou', 'Bekasi', '', 'Pembeli', '', '2020-09-20 09:18:02'),
(44, 'Nanimo', 'Nanimo Shoppu', 'nanimo_nanimo', '$2b$10$GpT2S2eD4QZckMktYJLhouZ9Zgvo7fr8h.3QcB2f3kW6.kfVw3a2.', 'jalan ni semuanya', '', 'Penjual', '', '2020-09-23 07:13:04'),
(45, 'Dedy', 'azfalfa', 'dedi_cayank_yati', '$2b$10$yWo.w1Tos5.W1211LDUJhObJrsH.sa7lSwfDagQHEqazTfhIxgiOy', 'Bekasi', '', 'Penjual', '', '2020-10-01 18:02:38'),
(46, 'Teti similikiti', 'Toko odading ironman', 'mang_oleh', '$2b$10$/kOuVEDSqRmILBmtbmyXWu26LkB4hQZBUk6r0zMmguMha95kr2SXK', 'Bekasi', '', 'Penjual', '', '2020-10-07 18:24:34'),
(47, 'Jaromeh tetih', 'toko abdullah', 'mang_oleh12', '$2b$10$XxWjm5g5YW4CzmFKH9w2Dul5rkK/WaLUbAC3H8XbFMPkbfuC0yaxm', 'Bekasi', '', 'Penjual', '', '2020-10-07 18:34:08'),
(48, 'azkul', '', 'azkul_marikul12', '$2b$10$4vxGKuJzwwqfT92jalJ13uwWmccnSyhtfZ2WjcRF2Ji8jQYdLS06y', 'Bekasi', '', 'Pembeli', '', '2020-10-07 18:35:48'),
(49, 'Alverdo', '', 'Alverdo_alv', '$2b$10$CDAoMKMvnTRS84HJFsJ6puQrECjVVZ.X/U.DmtEGpnpsqrJCIlms.', 'Cibitung', '', 'Pembeli', '', '2020-10-08 09:11:52'),
(50, 'Alverdo Azka', '', 'alverdo123', '$2b$10$kubRYli3NvmCHB7yFUgZ7e2ZXODkaxGwd44Pui./VdLB.qxBdPmHe', 'Bekasi', '', 'Pembeli', '', '2020-10-08 18:04:33'),
(51, 'Sabrina kinan', '', 'alverdo_kinan', '$2b$10$gwvXq9cGgEBL0iHaSO1qmeFisCV2pvxgxoIYlX1zk0j7uuq1k43cW', 'Bekasi', '', 'Pembeli', '', '2020-10-09 18:19:02'),
(52, 'Mincot Ala ala', 'Hade shop', 'hade_shoppu', '$2b$10$29Dt4f054esvFZqLiZnT1eee0Tu1f9Tn.GT7F35PDWduvxuSHnuFO', '', 'Bandung', 'Penjual', '', '2020-11-08 16:55:58'),
(53, 'Mincot Ala ala', 'Hade shop', 'hade_shoppu2', '$2b$10$TPPAOYG8xhXZNrU6Vk7ZF.vEZGQDC1YQ78sWKtLVhL4HDPgAkXfz6', 'Jalan ena ena', 'Bandung', 'Penjual', '', '2020-11-08 18:20:55'),
(54, 'Mincot Ala ala', 'Hade shop', 'hadeh', '$2b$10$2R9BBKQiTPlJCvviMa84zexOMC.YRE/kFrII7deSmAb7LKOPOsdhe', 'Jalan ena ena', 'Bandung', 'Penjual', NULL, '2020-11-08 18:28:24'),
(55, 'Mincot Ala ala', 'Hade shop', 'hadeh_lala', '$2b$10$FZAnGp43VKDbQWIaoRLf3es./o2i3XVfNwsyWe2CEB1L27wcwX.sW', 'Jalan ena ena', 'Bandung', 'Penjual', '01fcc20b538ddf46bd8aee4c2a3e94f1.png', '2020-11-08 18:31:07'),
(56, 'Mincot Ala ala', 'Hade shop', 'hadeh_lala5', '$2b$10$pgqJE.1NqkcuHhmGkrdzheVb4RCD7bO5epd8Ecn1pg3MwRRU9pNgC', 'Jalan ena ena', 'Bandung', 'Penjual', 'dc4b43249e8c6d7a5e72a4546e2979b0.png', '2020-11-08 19:21:32'),
(57, 'nunung hasanudin', '', 'nunuz123', '$2b$10$XbBnndGoEdTf3lZy613nv.0ZtgDjz4.hcIcP2rsKO9CXVguxvuBL6', 'Bekasi', 'Bekasi', 'Pembeli', 'ddd63564defa456ab14136f250866638.png', '2020-12-01 23:32:05'),
(58, 'nunung hasanudin', '', 'nunungsijabat', '$2b$10$uWLk/c1ym5MSeo4reFUPf.y3m5AlqfNCISFrMqvXg3oeOpBkIzXmG', 'Cibitung', 'Bekasi', 'Pembeli', 'eec0a68cd1b6a6e98f42a39cf7eb3d64.png', '2020-12-03 18:36:24'),
(59, 'Jerome polin sijabat', '', 'hadehgoblog', '$2b$10$yYqOgm4zgJ1fgN14tQIs..t3cJ0u2x3N13WSCls82LYHQ6fyxPD.i', 'Jalan Bawean', 'Jakarta', 'Pembeli', 'cf52b49924169d6c2bb7f91e838964d6.png', '2020-12-03 18:43:49'),
(60, 'Jerome polin sijabat', 'Nihongo Mantappu jiwa', 'bisadong', '$2b$10$J8RCfa31WdczkRa5wnWP0u4zbXwWkHbJ8VLrX0h51rfT3l2LJDvme', 'Jalan Tokyo Kemana aja', 'Bekasi', 'Penjual', 'e4c96d636c794fba64fd98c4cfc28de2.png', '2020-12-03 18:46:10'),
(61, 'tomo', '', 'tomoyama', '$2b$10$VqHw9zuUqZnzjGM7DwyZyOOOOqcNsJFg/sTNZ1FW8XCtrWJMbOaHW', 'Jalan Tokyo Kemana aja, cibitung', 'Jakarta', 'Pembeli', '', '2020-12-03 21:07:12'),
(62, 'tomo', '', 'tomosayangazkul', '$2b$10$7p4lqb7t3myrpDj3CjBayO0cwf2r7R/JxQZId.NqVOqIMSyQW6IFm', 'Jalan Bawean', 'Bekasi', 'Pembeli', '', '2020-12-04 19:02:40'),
(63, 'Gerald', 'undefined', 'gerald_gerald', '$2b$10$FVs/QC9wjsrbpFAxWnz0OO3m3NT0I0MqLBecY9UvN1UB5f8AM9Ggq', 'jalan kemana aja ayo', 'Bandung', 'Pembeli', '30d15397e016db034b7d2c6f50a62193.png', '2020-12-06 22:59:04'),
(64, 'Jerome Polin Sijabat', 'Nihon go Mantappu Mantap jiwa', 'jaromeh123_uye', '$2b$10$yaCjX82jn72e3t9OmZ8CneMJWlNMwD3YYudVyXzUz9buJ4PQSvPiy', 'Jalan Sejagat', 'Bekasi', '', '41b51806b5e73877d0d17728ff971fd2.png', '2020-12-21 01:40:32');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `keranjangs`
--
ALTER TABLE `keranjangs`
  ADD PRIMARY KEY (`id_keranjang`);

--
-- Indeks untuk tabel `pesanans`
--
ALTER TABLE `pesanans`
  ADD PRIMARY KEY (`id_pesanan`);

--
-- Indeks untuk tabel `produks`
--
ALTER TABLE `produks`
  ADD PRIMARY KEY (`id_produk`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `keranjangs`
--
ALTER TABLE `keranjangs`
  MODIFY `id_keranjang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `pesanans`
--
ALTER TABLE `pesanans`
  MODIFY `id_pesanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `produks`
--
ALTER TABLE `produks`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
