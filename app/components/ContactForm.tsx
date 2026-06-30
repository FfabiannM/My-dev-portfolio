'use client';
import Image from 'next/image';
import { useState } from 'react';
import SocialProfileGrid from './Social';
import { useLanguageStore } from '../store/store';

const ContactForm = () => {
  const { t, lang } = useLanguageStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const isEs = lang === 'es';
    const subject = encodeURIComponent(isEs ? 'Contacto desde Fabyan' : 'Contact from Fabyan');
    const body = encodeURIComponent(
      isEs 
        ? `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
        : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailto = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-md">
          <div className="flex flex-col w-full sm:w-1/2">
            <span className="text-gray-800 dark:text-gray-400 font-sans text-[23px] pb-3">
              {t('name')}
            </span>
            <input
              type="text"
              name="name"
              placeholder={lang === 'es' ? 'Nombre' : 'Name'}
              required
              maxLength={300}
              value={formData.name}
              onChange={handleChange}
              className="input w-full text-xl h-15 dark:bg-[#252525] bg-gray-300 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-gray-800 transition-all"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <span className="text-gray-800 dark:text-gray-400 font-sans text-[23px] pb-3">
              {t('email')}
            </span>
            <input
              type="email"
              name="email"
              placeholder={lang === 'es' ? 'Correo' : 'Email'}
              required
              maxLength={300}
              value={formData.email}
              onChange={handleChange}
              className="input w-full text-xl h-15 dark:bg-[#252525] bg-gray-300 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-gray-800 transition-all"
            />
          </div>
        </div>
        <span className="text-gray-800 dark:text-gray-400 font-sans text-[23px]">
          {t('message')}
        </span>
        <textarea
          name="message"
          placeholder={lang === 'es' ? '¿De qué trata tu mensaje?' : 'What is your message about?'}
          required
          maxLength={300}
          value={formData.message}
          onChange={handleChange}
          className="input w-full text-xl h-40 dark:bg-[#252525] bg-gray-300 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-gray-800 transition-all"
        />

        <button
          type="submit"
          className="flex bg-gray-200 hover:bg-gray-300 hover:scale-105 transition-all duration-200 cursor-pointer text-gray-900 border dark:border-gray-800 gap-4 justify-center items-center w-35 h-15 rounded-4xl"
        >
          <Image src="/send.svg" alt="Enviar" width={25} height={25} />
          <span className="text-xl font-light">{t('send')}</span>
        </button>
      </form>

      <div className="pt-7">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-2xl font-arima text-gray-800 dark:text-gray-100">
            {t('find_me_by')}:
          </h2>
        </div>
        <SocialProfileGrid />
      </div>
    </div>
  );
};

export default ContactForm;
