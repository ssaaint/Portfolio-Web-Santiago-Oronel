import { useMemo, useState } from 'react';
import { Send } from 'lucide-react';
import Button from './Button.jsx';
import { profile } from '../../data/profile.js';
import { useI18n } from '../../hooks/useI18n.jsx';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function ContactForm() {
  const { t } = useI18n();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const mailtoUrl = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact - ${values.name || 'Santiago Oronel'}`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`);
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [values]);

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = t('contact.form.nameError');
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = t('contact.form.emailError');
    if (values.message.trim().length < 12) nextErrors.message = t('contact.form.messageError');
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('success');
    window.location.href = mailtoUrl;
  };

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  return (
    <form className="glass-panel rounded-2xl p-5 sm:p-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200">
          {t('contact.form.name')}
          <input
            className="mt-2 w-full rounded-2xl border border-ink-900/10 bg-white/90 px-4 py-3 text-ink-950 shadow-sm transition placeholder:text-ink-400 focus:border-violet-400 dark:border-white/10 dark:bg-white/[0.085] dark:text-white"
            name="name"
            type="text"
            value={values.name}
            onChange={updateField}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            autoComplete="name"
          />
          {errors.name ? <span id="name-error" className="mt-2 block text-xs text-red-500">{errors.name}</span> : null}
        </label>

        <label className="block text-sm font-semibold text-ink-700 dark:text-ink-200">
          {t('contact.form.email')}
          <input
            className="mt-2 w-full rounded-2xl border border-ink-900/10 bg-white/90 px-4 py-3 text-ink-950 shadow-sm transition placeholder:text-ink-400 focus:border-violet-400 dark:border-white/10 dark:bg-white/[0.085] dark:text-white"
            name="email"
            type="email"
            value={values.email}
            onChange={updateField}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
          />
          {errors.email ? <span id="email-error" className="mt-2 block text-xs text-red-500">{errors.email}</span> : null}
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold text-ink-700 dark:text-ink-200">
        {t('contact.form.message')}
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-2xl border border-ink-900/10 bg-white/90 px-4 py-3 text-ink-950 shadow-sm transition placeholder:text-ink-400 focus:border-violet-400 dark:border-white/10 dark:bg-white/[0.085] dark:text-white"
          name="message"
          value={values.message}
          onChange={updateField}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="mt-2 block text-xs text-red-500">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit">
          <Send size={17} aria-hidden="true" />
          {t('contact.form.submit')}
        </Button>
        {status === 'success' ? (
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-300">{t('contact.form.success')}</p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm font-medium text-red-500 dark:text-red-300">{t('contact.form.error')}</p>
        ) : null}
      </div>
    </form>
  );
}

export default ContactForm;
