export default function catchErrors(error, displayError) {
  // Examine the error raised by axios:
  let errorMsg;
  if (error.response) {
    // The request was made, server responded with non-2xx status
    errorMsg = error.response.data;
    console.error('Error response: ', errorMsg);
  } else if (error.response.data.error) {
    // cloudinary error
    errorMsg = error.response.data.error.message;
    console.error('Error response: ', errorMsg);
  } else if (error.request) {
    // The request was made but no response was recieved
    errorMsg = error.request;
    console.error('Error request: ', errorMsg);
  } else {
    // Something else happened
    errorMsg = error.message;
    console.error('Error message: ', errorMsg);
  }
  displayError(errorMsg);
}
