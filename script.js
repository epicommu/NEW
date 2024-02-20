document.getElementById('investment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var annualInvestment = parseFloat(document.getElementById('annual-investment').value);
    var investmentPeriod = parseFloat(document.getElementById('investment-period').value);
    var investmentAsset = document.getElementById('investment-asset').value;

    // 자산별 연수익률 설정
    var annualReturnRate = {
        'snp500': 0.179, // 미국 S&P 500
        'nasdaq': 0.1789, // 나스닥
        'kospi200': 0.0704 // 코스피 200
    };

    // 선택한 투자 자산의 연수익률 가져오기
    var selectedReturnRate = annualReturnRate[investmentAsset];

    // 계산 로직 실행
    var result = calculateInvestmentResult(annualInvestment, investmentPeriod, selectedReturnRate);
    
    // 결과 표시
    document.getElementById('result').innerText = '미래 가치: ' + result.futureValue.toFixed(2) + 
                                                 '원, 원금 대비 수익률: ' + (result.interestRate * 100).toFixed(2) + '%';
});

function calculateInvestmentResult(annualInvestment, investmentPeriod, annualReturnRate) {
    var futureValue = 0;
    var principal = annualInvestment * investmentPeriod;
    
    // 매년 투자를 더하면서 복리 계산
    for (var year = 1; year <= investmentPeriod; year++) {
        futureValue = (futureValue + annualInvestment) * (1 + annualReturnRate);
    }

    // 원금 대비 수익률 계산
    var interestRate = (futureValue - principal) / principal;

    // 미래 가치와 수익률 반환
    return {
        futureValue: futureValue,
        interestRate: interestRate
    };
}
