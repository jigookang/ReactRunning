'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from '../components/ThemeToggle';

// 상수 정의
const STYLES = {
  container: {
    main: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
    card: "max-w-xs w-full mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",
    formContainer: "p-4",
  },
  header: {
    container: "bg-indigo-600 dark:bg-indigo-700 p-4",
    icon: "w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3",
    title: "text-xl font-bold text-gray-900 dark:text-white",
    subtitle: "text-center text-xs text-white/80 mt-[8px]",
  },
  form: {
    container: "space-y-4",
    inputContainer: "flex justify-center",
    inputWrapper: "w-[350px]",
    label: "block text-xs font-medium text-gray-700 dark:text-gray-300",
    input: "mt-1 block w-full h-[48px] px-7 border border-gray-300 dark:border-gray-600 rounded-[4px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-xs",
    button: "mt-[16px] w-full h-[56px] flex items-center justify-center border border-transparent rounded-[4px] shadow-sm text-xs font-medium text-white bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] dark:focus:ring-indigo-500",
    linkContainer: "text-center mt-[24px]",
    linkText: "text-xs text-gray-600 dark:text-gray-400",
    link: "font-medium text-blue-600 dark:text-white hover:text-blue-500 dark:hover:text-gray-300",
  },
  spacing: {
    inputMargin: "mt-[14px]",
  },
};

// Input 컴포넌트
const Input = ({ 
  id, 
  label, 
  type, 
  placeholder, 
  value, 
  onChange 
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className={STYLES.form.inputContainer}>
    <div className={STYLES.form.inputWrapper}>
      <label htmlFor={id} className={STYLES.form.label}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className={STYLES.form.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

// Header 컴포넌트
const Header = () => (
  <div className={STYLES.header.container}>
    <div className="flex flex-col items-center text-white">
      <div className={STYLES.header.icon}>
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h2 className={STYLES.header.title}>환영합니다!</h2>
      <p className={STYLES.header.subtitle}>더 나은 서비스를 위해 로그인해주세요.</p>
    </div>
  </div>
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
    console.log('Login attempt:', { email, password });
    // 로그인 성공 시 홈페이지로 리다이렉트
    // router.push('/');
  };

  return (
    <>
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <div className={STYLES.container.main}>
        <div className={STYLES.container.card}>
          <div className="flex flex-col">
            <Header />
            
            <div className={STYLES.container.formContainer}>
              <form onSubmit={handleSubmit} className={STYLES.form.container}>
                <Input
                  id="email"
                  label="이메일"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className={STYLES.spacing.inputMargin}>
                  <Input
                    id="password"
                    label="비밀번호"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className={STYLES.form.inputContainer}>
                  <div className={STYLES.form.inputWrapper}>
                    <button
                      type="submit"
                      className={STYLES.form.button}
                    >
                      로그인
                    </button>
                  </div>
                </div>

                <div className={STYLES.form.linkContainer}>
                  <p className={STYLES.form.linkText}>
                    계정이 없으신가요?{' '}
                    <a href="/signup" className={STYLES.form.link}>
                      회원가입
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 