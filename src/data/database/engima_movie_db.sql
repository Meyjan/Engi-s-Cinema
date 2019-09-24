-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2019 at 05:26 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `engima_movie_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie_table`
--

CREATE TABLE `movie_table` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `photo_link` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movie_user_table`
--

CREATE TABLE `movie_user_table` (
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `rating` float DEFAULT NULL,
  `review` varchar(200) DEFAULT NULL,
  `seat_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_pic` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`id`, `username`, `email`, `phone_number`, `password`, `profile_pic`, `token`) VALUES
(2, 'meyjancuk', 'saragih.meyer0821@gmail.comy', '1234567', '$2y$10$LWDShOesgjoMOhxsnUjRSeZl9NytkNBGerk2hn0BVKKNQKmTBI/NW', '', NULL),
(3, 'sadfg', 'test@gmail.com', '123456789', '$2y$10$pegMJ/eQ5sQltt8JWr4eTedlYAronVZuWqh44GzVRC7XV4xkpepC6', '', NULL),
(4, 'sadfgh', 'test@gmail.comy', '12345678910', '$2y$10$tHd095oCI6FbbVBcPVb/JONaljXdu.8SQ0o.uAPJP3fRZGciPtaMO', '', NULL),
(5, 'sadfghi', 'test@gmail.comya', '123456789101', '$2y$10$DeEovGbuDE6jUrQMupPIYuf1Bn6gzewhUIyx5NcAmlp6zrvF1HqRG', '', NULL),
(6, 'sadfghij', 'test@gmail.comyab', '12345678', '$2y$10$3ghrTiUutRh5F9adpiQDKO0.uBZcTyq5PsXBv6Ipm0rdnz.53GjsC', '', NULL),
(8, 'meyjancuckers', 'saragih.meyer0821@gmail.comya', '081233230', '$2y$10$16UgVrIBGxPKQO/OfS08auwNN/luSI8BBFhIIooGywz4a06DptgRC', '', 'I\'m a weeb saragih.meyer0821@gmail.comya');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie_table`
--
ALTER TABLE `movie_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie_user_table`
--
ALTER TABLE `movie_user_table`
  ADD PRIMARY KEY (`user_id`,`movie_id`),
  ADD KEY `movie_constraint` (`movie_id`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie_table`
--
ALTER TABLE `movie_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movie_user_table`
--
ALTER TABLE `movie_user_table`
  ADD CONSTRAINT `movie_constraint` FOREIGN KEY (`movie_id`) REFERENCES `movie_table` (`id`),
  ADD CONSTRAINT `user_constraint` FOREIGN KEY (`user_id`) REFERENCES `user_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
