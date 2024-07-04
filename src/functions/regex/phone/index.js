export const validatePhoneNumber = phoneNumber => {
  console.log('phoneNumber: ', phoneNumber);
  const regex = /^(0|\+84)(3[2-9]|5|7|8|9)[0-9]{7}$/;

  if (phoneNumber === '' || phoneNumber === null || phoneNumber === undefined) {
    return 'Số điện thoại không được để trống';
  }

  if (phoneNumber.length < 10) {
    return 'Số điện thoại không được ít hơn 10 số';
  }

  if (phoneNumber.length > 11) {
    return 'Số điện thoại không được nhiều hơn 11 số';
  }

  if (!regex.test(phoneNumber)) {
    return 'Số điện thoại không hợp lệ';
  }

  return 'NOTSHOW';
};
