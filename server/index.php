<?php
require_once 'vendor/autoload.php';

(new Dotenv\Dotenv(__DIR__))->load();

// Allow getting data from our API
header('Access-Control-Allow-Origin: *');

// Set our response to JSON
header('Content-type: application/json');

try {
    $twitter = new Twitter($_ENV['TWITTER_CONSUMER_KEY'], $_ENV['TWITTER_CONSUMER_SECRET']);

    // Search twitter for tweets
    $response = $twitter->request('search/tweets', 'GET', [
        'q' => 'javascript',
        'lang' => 'en',
        'count' => 1
    ]);
} catch(TwitterException $e) {
    $response = ['error' => $e->getMessage()];
}

exit(json_encode($response));