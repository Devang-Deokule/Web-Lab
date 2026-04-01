<?php
declare(strict_types=1);

header('Content-Type: application/xml; charset=UTF-8');

$query = isset($_GET['q']) ? trim((string) $_GET['q']) : '';
$xmlPath = __DIR__ . '/users.xml';

function xmlEscape(string $value): string
{
    return htmlspecialchars($value, ENT_XML1 | ENT_QUOTES, 'UTF-8');
}

if (!file_exists($xmlPath)) {
    http_response_code(500);
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    echo "<results><error>Backend XML file not found.</error></results>";
    exit;
}

if (!function_exists('simplexml_load_file')) {
    http_response_code(500);
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    echo "<results><error>SimpleXML extension is not enabled in PHP.</error></results>";
    exit;
}

libxml_use_internal_errors(true);
$users = simplexml_load_file($xmlPath);
if ($users === false) {
    libxml_clear_errors();
    http_response_code(500);
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    echo "<results><error>Unable to read backend XML file.</error></results>";
    exit;
}
libxml_clear_errors();

$response = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<results>";

foreach ($users->user as $user) {
    $name = trim((string) $user->name);
    $email = trim((string) $user->email);

    if ($query !== '' && stripos($name, $query) === false) {
        continue;
    }

    $response .= '<user>';
    $response .= '<name>' . xmlEscape($name) . '</name>';
    $response .= '<email>' . xmlEscape($email) . '</email>';
    $response .= '</user>';
}

$response .= '</results>';

echo $response;
