document.getElementById('investment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var annualInvestment = document.getElementById('annual-investment').value;
    var investmentPeriod = document.getElementById('investment-period').value;
    var investmentAsset = document.getElementById('investment-asset').value;

    // 여기에 계산 로직을 구현합니다.
    // 결과를 'result' div에 표시하기 위한 예시입니다.
    // 실제 계산 로직은 투자 자산의 예상 수익률에 따라 달라집니다.

    var result = calculateInvestmentResult(annualInvestment, investmentPeriod, investmentAsset);
    document.getElementById('result').innerText = '계산된 결과: ' + result;
});

function calculateInvestmentResult(annualInvestment, investmentPeriod, investmentAsset) {
    //
