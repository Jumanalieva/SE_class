document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://api.coinlayer.com/api/live?access_key=a6a6f8ec988618838332cc4bbb806a5e';

    const cryptoNames = {
        'BTC': 'Bitcoin',
        'ETH': 'Ethereum',
        'XRP': 'Ripple',
        'BCH': 'Bitcoin Cash',
        'LTC': 'Litecoin',
        'EOS': 'EOS.IO',
        'BNB': 'Binance Coin',
        'LINK': 'Chainlink',
        'ADA': 'Cardano'
    };

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                const tableBody = document.getElementById('crypto-table');
                
                tableBody.innerHTML = '';

                Object.keys(cryptoNames).forEach(symbol => {
                    const price_usd = data.rates[symbol]; // Get the price from the data
                    const name = cryptoNames[symbol]; // Get the full name using the symbol
                
                    const row = `<tr>
                                    <td>${name}</td>
                                    <td>${symbol}</td>
                                    <td>${price_usd}</td>
                                </tr>`;
                    
                    tableBody.innerHTML += row;
                });
            } else {
                console.error('Error fetching data:', data);
                // Handle errors (e.g., display a message to the user)
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            // Handle network errors (e.g., display a message to the user)
        });
});
