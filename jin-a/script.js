const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');

// container.style.display = 'none';

messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`; // 템플릿 리터럴
  return dateFormat;
  // console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function () {
  const messageContainer = document.querySelector('#d-day-message');
  messageContainer.textContent = 'D-Day를 입력해 주세요.';
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  
  if (remaining <= 0) {
    // 만약, remaining이 0이라면, 타이머가 종료되었습니다. 출력
    messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>'
  } else if(isNaN(remaining)) {
    // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>'
  }


  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingSec = Math.floor(remaining) % 60;

  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const min = document.getElementById('min');
  const sec = document.getElementById('sec');
  
  days.textContent = remainingDate;
  hours.textContent = remainingHours;
  min.textContent = remainingMin;
  sec.textContent = remainingSec;
  
  console.log(remainingDate, remainingHours, remainingMin, remainingSec);

};
