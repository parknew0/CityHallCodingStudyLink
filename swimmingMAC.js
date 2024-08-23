window.confirm = function(message) {
    console.log(message); // 메시지를 콘솔에 출력
    return true; // 항상 '확인'을 선택하는 것과 동일하게 처리
};

$(document).ready(function() {
    // 1. 첫 번째 옵션 선택 (중급반 강습 주5회)
    var firstSelectElement = $("option[value='53|#|1477']");
    firstSelectElement.prop("selected", true); // 옵션 선택

    // 2. 강좌가 로드되는 시간을 기다림
    setTimeout(function() {
        // 3. 첫 번째 select에서 원하는 강좌 선택
        var selectLectureElement = $("#lect_sqno");
        selectLectureElement.val("10000033");
        selectLectureElement.change(); // 강좌 선택 후, 변경 이벤트 트리거

        // 4. 강좌 목록이 로드되는 시간을 기다림
        setTimeout(function() {
            // 5. 두 번째 select에서 1개월 옵션 선택
            var selectMonthElement = $("#lect_amt_sqno"); // 두 번째 select 요소 선택
            selectMonthElement.val("326"); // 1개월 옵션 선택
            selectMonthElement.change(); // 변경 이벤트 트리거

            // 6. "신청하기" 버튼 클릭
            setTimeout(function() {
                $("input[value='신청하기']").click(); // 신청하기 버튼 클릭
            }, 500); // 두 번째 선택 후 0.5초 지연
            
        }, 2000); // 첫 번째 강좌 선택 후 2초 지연 (강좌 로딩 시간 고려)

    }, 2000); // 첫 번째 옵션 선택 후 2초 지연 (강좌 로딩 시간 고려)
});
