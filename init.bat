@echo off
npx -y create-vite@latest temp_web --template react-ts
xcopy /E /I /Y temp_web .
rmdir /S /Q temp_web
move data.ts src\
move profile.png public\
move "CV-Muhamad Cahyo.pdf" public\
move f1-radio_QLwLncI.mp3 public\
move f1-box-box-box.mp3 public\
move favicon.ico public\
npm install
npm install lucide-react framer-motion
del init.bat
