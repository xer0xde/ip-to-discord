<head>
	<title>Webhook Discord IP Sender/title>
</head>
<body>
	<h1>Webhook Discord IP Sender</h1>
	<p>This code uses Node.js to periodically check the public IP address of a server and send a Discord webhook if the IP has changed. It requires the installation of the 'public-ip' and 'axios' packages.</p>
	<h2>Setup</h2>
	<ol>
		<li>Clone the repository or download the files</li>
		<li>Install the required packages by running 'npm install' in the terminal</li>
		<li>Create a 'config.json' file based on the example provided</li>
		<li>Update the webhook URL in the 'config.json' file with your own webhook URL</li>
		<li>Adjust the interval time (in milliseconds) in the 'config.json' file to your desired frequency of IP checks</li>
		<li>Run the code with 'node index.js'</li>
	</ol>
	<h2>Code Explanation</h2>
	<p>The 'public-ip' package is used to retrieve the server's public IP address. If the IP has changed since the last check, the 'axios' package is used to send a Discord webhook with the new IP address. The webhook includes a title, description, color, and footer with a timestamp.</p>
	<p>The 'config.json' file is used to store the webhook URL and interval time. The interval time determines how often the IP address is checked.</p>
