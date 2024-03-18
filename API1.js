const axios = require('axios');

async function createInvestmentAccount() {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
      name: 'Your Full Nam',
      email: 'your_colle@example.com',
      rollNumber: 'Your Roll Number',
      phone: 'Your Phone Number',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Investment account created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating investment account:', error);
    throw error;
  }
}

async function buyStocks(accountNumber,company,currentPrice, githubRepoLink,) {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', {
      company:'Bajaj finserv',
      currentPrice:'1578.45',
      accountNumber:'BFHL0018659',
      githubRepoLink:'https://github.com/Vanshika5656/Bajaj',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'bfhl-auth': '2110991516',
      },
    });

    console.log('Stocks bought:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error buying stocks:', error);
    throw error;
  }
}

async function main() {
  const account = await createInvestmentAccount();
  if(){
    const githubRepoLink = 'https://github.com/Vanshika5656/Bajaj';
  
    await buyStocks(accountNumber,company,currentPrice,githubRepoLink);
  }
}

main().catch((error) => {
  console.error('Error in main function:', error);
});
