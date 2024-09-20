// URL của API SheetDB
const apiUrl = 'https://sheetdb.io/api/v1/x2w4k07xdsgsl';

// Hàm gửi dữ liệu đến API
async function addDataToSheet(message, sender) {
  // Tạo dữ liệu cần gửi
  const newData = {
    "Message": message,
    "Sender": sender,
    "IsActive": true
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    // console.log('Data added successfully:', result);
  } catch (error) {
    console.error('Error adding data:', error);
  }
}

// Ví dụ gọi hàm để thêm dữ liệu
// const exampleMessage = 'Chúc mừng sinh nhật!';
// const exampleSender = 'Duclba';

// addDataToSheet(exampleMessage, exampleSender);


// Hàm lấy dữ liệu từ API
async function getDataFromSheet() {
    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
    //   console.log('Data retrieved successfully:', data);
  
      return data; // Trả về dữ liệu để sử dụng sau
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }
  
  // Fetch data from the API
  fetch('https://sheetdb.io/api/v1/v6eo0ovgiocf4')
      .then(response => response.json())
      .then(data => {
          // Loop through the data and update the like counts
          data.forEach(item => {
              const id = item.id;
              const quantity = item.Quantity;
              const element = document.querySelector(`.tym-${id}`);
              if (element) {
                  element.textContent = quantity;
              }
          });
      })
      .catch(error => console.error('Error fetching data:', error));


      