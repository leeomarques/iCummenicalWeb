<?php
require_once 'vendor/autoload.php';

const DEFAULT_URL = 'https://icummenical.firebaseio.com/';
const DEFAULT_TOKEN = 'AIzaSyBXTv9ar6lqLBhekXscqvI2kt6ZxUfctQA';
const DEFAULT_PATH = '/Eventos';

$firebase = new \Firebase\FirebaseLib(DEFAULT_URL, DEFAULT_TOKEN);

/*
// --- storing an array ---
$test = array(
    "foo" => "bar",
    "i_love" => "lamp",
    "id" => 42
);
$dateTime = new DateTime();
$firebase->set(DEFAULT_PATH . '/' . $dateTime->format('c'), $test);
*/

// --- storing a string ---
$firebase->set(DEFAULT_PATH . '/name/contact001', "John Doe");

// --- reading the stored string ---
$name = $firebase->get(DEFAULT_PATH . '/name/contact001');