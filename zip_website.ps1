# ======================================================================
# Interior Design Studio Deployment Packer
# ======================================================================
# This script builds the Vite project and bundles the built files into 
# a ZIP archive for manual upload to Hostinger hPanel File Manager.

$ErrorActionPreference = "Stop"

# Define paths relative to the script location
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$distDir = Join-Path $scriptDir "dist"
$outputZip = Join-Path $scriptDir "interior-design-studio.zip"

Write-Host "--- Interior Design Studio Deploy Packer ---" -ForegroundColor Cyan
Write-Host "Vite Build Output: $distDir" -ForegroundColor Gray
Write-Host "Output Zip Path:   $outputZip" -ForegroundColor Gray

# 1. Clean previous build files and zip
if (Test-Path $distDir) {
    Write-Host "Cleaning old build files..." -ForegroundColor Yellow
    Remove-Item -Path $distDir -Recurse -Force
}
if (Test-Path $outputZip) {
    Write-Host "Removing existing zip file..." -ForegroundColor Yellow
    Remove-Item $outputZip -Force
}

# 2. Build the project
Write-Host "Installing dependencies and building the project..." -ForegroundColor Cyan
npm install
npm run build

# Verify build folder was created
if (-not (Test-Path $distDir)) {
    Write-Error "Build failed! 'dist' directory not found."
    Exit 1
}

Write-Host "`nZipping build files (including hidden configurations)..." -ForegroundColor Cyan

# Use Get-ChildItem -Force to include hidden files like .htaccess
$filesToZip = Get-ChildItem -Path $distDir -Force

if ($filesToZip.Count -eq 0) {
    Write-Error "No files found in 'dist' folder to zip!"
    Exit 1
}

# Compress the contents
Compress-Archive -Path $filesToZip.FullName -DestinationPath $outputZip -Force

Write-Host "`n[SUCCESS] interior-design-studio.zip created successfully!" -ForegroundColor Green
Write-Host "Instructions for manual upload:" -ForegroundColor Yellow
Write-Host "1. Log in to Hostinger hPanel -> File Manager."
Write-Host "2. Go into the 'public_html' folder."
Write-Host "3. Drag & drop 'interior-design-studio.zip' into the folder."
Write-Host "4. Right-click the zip, click 'Extract', and choose 'public_html' as the destination."
Write-Host "5. Make sure the files (index.html, assets, .htaccess, etc.) are in public_html directly, not inside a subfolder."
