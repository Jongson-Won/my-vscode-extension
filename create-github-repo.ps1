# GitHub 저장소 생성 스크립트
Write-Host "GitHub 저장소를 생성합니다..." -ForegroundColor Green

# GitHub CLI 인증 상태 확인
$authStatus = & "C:\Program Files\GitHub CLI\gh.exe" auth status 2>&1

if ($authStatus -like "*You are not logged into*") {
    Write-Host "`nGitHub에 로그인이 필요합니다." -ForegroundColor Yellow
    Write-Host "Personal Access Token을 준비해주세요." -ForegroundColor Yellow
    Write-Host "`n다음 명령어를 실행하여 로그인하세요:" -ForegroundColor Cyan
    Write-Host "gh auth login --with-token" -ForegroundColor White
    Write-Host "`n토큰을 입력하라고 하면 복사한 Personal Access Token을 붙여넣으세요.`n" -ForegroundColor Yellow
    exit
}

# 저장소 이름 입력받기
$repoName = Read-Host "`n저장소 이름을 입력하세요 (기본값: my-vscode-extension)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "my-vscode-extension"
}

# 저장소 설명 입력받기
$repoDescription = Read-Host "저장소 설명을 입력하세요 (선택사항)"
if ([string]::IsNullOrWhiteSpace($repoDescription)) {
    $repoDescription = "My VS Code Extension"
}

# 공개/비공개 선택
Write-Host "`n저장소 공개 설정:"
Write-Host "1. Public (공개)"
Write-Host "2. Private (비공개)"
$visibility = Read-Host "선택하세요 (1 또는 2, 기본값: 1)"
if ($visibility -eq "2") {
    $visibilityFlag = "--private"
} else {
    $visibilityFlag = "--public"
}

# 저장소 생성
Write-Host "`n저장소를 생성하는 중..." -ForegroundColor Green
try {
    & "C:\Program Files\GitHub CLI\gh.exe" repo create $repoName --description "$repoDescription" $visibilityFlag --clone=false
    
    # 원격 저장소 추가
    Write-Host "`n로컬 Git 저장소에 원격 저장소를 연결하는 중..." -ForegroundColor Green
    git remote add origin "https://github.com/$($env:USERNAME)/$repoName.git"
    
    # 브랜치 이름을 main으로 변경
    git branch -M main
    
    # 첫 번째 푸시
    Write-Host "`n코드를 GitHub에 업로드하는 중..." -ForegroundColor Green
    git push -u origin main
    
    Write-Host "`n✅ 성공적으로 완료되었습니다!" -ForegroundColor Green
    Write-Host "저장소 URL: https://github.com/$($env:USERNAME)/$repoName" -ForegroundColor Cyan
}
catch {
    Write-Host "`n❌ 오류가 발생했습니다: $_" -ForegroundColor Red
} 