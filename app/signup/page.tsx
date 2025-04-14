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
    container: "bg-indigo-600 dark:bg-indigo-700 p-4 text-center",
    icon: "w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3",
    title: "text-xl font-bold text-white mb-[4px]",
    subtitle: "text-center text-xs text-white/80",
  },
  form: {
    container: "space-y-4 flex flex-col items-center",
    inputContainer: "flex justify-center w-full",
    inputWrapper: "w-[350px]",
    label: "block text-xs font-medium text-gray-700 dark:text-gray-300",
    input: "mt-1 block w-[350px] h-[56px] px-7 border border-gray-300 dark:border-gray-600 rounded-[4px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-xs",
    button: "mt-[16px] w-[350px] h-[56px] flex items-center justify-center border border-transparent rounded-[4px] shadow-sm text-[13.3333px] font-medium text-[#000000] bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] dark:focus:ring-indigo-500 p-[1px_6px] text-center",
    linkContainer: "text-center mt-[24px] w-[350px]",
    linkText: "text-xs text-gray-600 dark:text-gray-400",
    link: "font-medium text-blue-600 dark:text-white hover:text-blue-500 dark:hover:text-gray-300",
  },
  spacing: {
    inputMargin: "mt-[14px] flex justify-center",
  },
};

// Input 컴포넌트
const Input = ({ 
  id, 
  label, 
  type, 
  placeholder, 
  value, 
  onChange,
  required = true 
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
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
        required={required}
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
      <h2 className={STYLES.header.title}>회원가입</h2>
      <p className={STYLES.header.subtitle}>새로운 계정을 만들어보세요</p>
    </div>
  </div>
);

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: ''
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 회원가입 로직 구현
    console.log('SignUp attempt:', formData);
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 회원가입 성공 시 로그인 페이지로 리다이렉트
    // router.push('/login');
  };

  return (
    <>
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <div className={STYLES.container.main}>
        <div className={STYLES.container.card}>
          <Header />
          <div className={STYLES.container.formContainer}>
            <form onSubmit={handleSubmit} className={STYLES.form.container}>
              <Input
                id="email"
                label="이메일"
                type="email"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleChange}
              />

              <div className={STYLES.spacing.inputMargin}>
                <Input
                  id="name"
                  label="이름"
                  type="text"
                  placeholder="이름을 입력하세요"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={STYLES.spacing.inputMargin}>
                <Input
                  id="phone"
                  label="전화번호"
                  type="tel"
                  placeholder="전화번호를 입력하세요"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={STYLES.spacing.inputMargin}>
                <Input
                  id="password"
                  label="비밀번호"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className={STYLES.spacing.inputMargin}>
                <Input
                  id="confirmPassword"
                  label="비밀번호 확인"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className={STYLES.form.inputContainer}>
                <div className={STYLES.form.inputWrapper}>
                  <button
                    type="submit"
                    className={STYLES.form.button}
                  >
                    회원가입
                  </button>
                </div>
              </div>

              <div className={STYLES.form.linkContainer}>
                <p className={STYLES.form.linkText}>
                  이미 계정이 있으신가요?{' '}
                  <a href="/login" className={STYLES.form.link}>
                    로그인
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
} 