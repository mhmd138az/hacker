let crackTimer;
let crackProgress = 0;
let ddosTimer;
let ddosAttempts = 0;
let trafficData = [0, 10, 30, 50, 80];
let trafficChart;

function simulatePasswordCrack() {
    const result = document.getElementById("password-result");
    if (crackProgress < 100) {
        crackProgress += 10;
        result.textContent = Cracking password... (${crackProgress}%);
        result.style.color = "yellow";
    } else {
        result.textContent = "Password cracked successfully! Password found.";
        result.style.color = "green";
        clearInterval(crackTimer);
    }
}

function checkPassword() {
    const passwordInput = document.getElementById("password-input").value;
    const result = document.getElementById("password-result");

    if (passwordInput === "admin123") {
        result.textContent = "Correct password! Access granted.";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect password! Try again...";
        result.style.color = "red";
        crackTimer = setInterval(simulatePasswordCrack, 500); // Simulate password cracking
    }
}

function simulateDDOSAttack() {
    const consoleOutput = document.getElementById("console-output");
    if (ddosAttempts < 10) {
        ddosAttempts++;
        consoleOutput.textContent += "\n> Sending DDOS requests...";
    } else {
        consoleOutput.textContent += "\n> DDOS attack successful! Site is down.";
        clearInterval(ddosTimer);
    }
}

function startDDOS() {
    ddosTimer = setInterval(simulateDDOSAttack, 2000); // Send request every 2 seconds
}

function showSecurityAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'security-alert';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000); // Hide popup after 3 seconds
}

function encryptMessage(message, key) {
    return message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + key)).join('');
}

function decryptMessage(message, key) {
    return message.split('').map(char => String.fromCharCode(char.charCodeAt(0) - key)).join('');
}

function processEncryption() {
    const inputMessage = document.getElementById("encryption-input").value;
    if (inputMessage.trim() === "") {
        alert("Please enter a message!");
        return;
    }
    const key = 3;
    const encrypted = encryptMessage(inputMessage, key);
    const decrypted = decryptMessage(encrypted, key);

    const result = document.getElementById("encryption-result");
    result.innerHTML = `
        <p>Encrypted: ${encrypted}</p>
        <p>Decrypted: ${decrypted}</p>
    `;
}

function updateTrafficData() {
    trafficData.push(Math.floor(Math.random() * 100));
    if (trafficData.length > 10) trafficData.shift();

    trafficChart.data.datasets[0].data = trafficData;
    trafficChart.update();
}
// Traffic chart
const ctx = document.getElementById('traffic-chart').getContext('2d');
trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: 10 }, (_, i) => i),
        datasets: [{
            label: 'Network Traffic',
            data: trafficData,
            borderColor: 'lime',
            backgroundColor: 'rgba(0, 255, 0, 0.3)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Traffic'
                }
            }
        }
    }
});
setInterval(updateTrafficData, 1000); // Update every 1 second

function simulateHttpRequest(url) {
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.textContent += \n> Sending request to ${url}...;

    setTimeout(() => {
        consoleOutput.textContent += \n> Response from ${url}: 200 OK;
    }, 2000); // Simulate response after 2 seconds
}

// New Features

// Simulate SQL Injection Attack
function simulateSQLInjection() {
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.textContent += \n> Attempting SQL Injection...;

    setTimeout(() => {
        consoleOutput.textContent += \n> SQL Injection successful! Data extracted.;
    }, 3000); // Simulate response after 3 seconds
}

// Simulate XSS Attack
function simulateXSSAttack() {
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.textContent += \n> Injecting XSS script...;

    setTimeout(() => {
        consoleOutput.textContent += \n> XSS attack successful! Cookie stolen.;
    }, 3000); // Simulate response after 3 seconds
}

// Simulate Phishing Attack
function simulatePhishingAttack() {
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.textContent += \n> Sending phishing email...;

    setTimeout(() => {
        consoleOutput.textContent += \n> Phishing attack successful! Credentials obtained.;
    }, 4000); // Simulate response after 4 seconds
}

// Simulate Firewall Detection
function simulateFirewallDetection() {
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.textContent += \n> Firewall detected suspicious activity! Blocking IP...;

    setTimeout(() => {
        consoleOutput.textContent += \n> IP blocked by firewall.;
    }, 2000); // Simulate response after 2 seconds
}
// Simulate IDS Detection
function simulateIDSDetection() {
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.textContent += \n> IDS detected intrusion attempt! Alerting admin...;

    setTimeout(() => {
        consoleOutput.textContent += \n> Admin alerted by IDS.;
    }, 2000); // Simulate response after 2 seconds
}
