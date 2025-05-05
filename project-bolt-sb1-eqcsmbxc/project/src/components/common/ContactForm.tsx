import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from './Button'; // Remplace si tu as un autre composant bouton

// Identifiants EmailJS
const SERVICE_ID = 'service_3spv10x';
const TEMPLATE_ID_TO_ADMIN = 'template_4ygjzcj'; // Contact Us
const TEMPLATE_ID_TO_USER = 'template_xtue0mn';  // Auto-Reply
const PUBLIC_KEY = 'jwBPeWMFp1Giuqt0Q';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(null);

    const emailParams = {
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Envoi au destinataire (association)
    emailjs.send(SERVICE_ID, TEMPLATE_ID_TO_ADMIN, emailParams, PUBLIC_KEY)
      .then(() => {
        // Envoi de confirmation à l'utilisateur
        emailjs.send(SERVICE_ID, TEMPLATE_ID_TO_USER, emailParams, PUBLIC_KEY)
          .then(() => {
            setSuccess("Votre message a bien été envoyé ! Un email de confirmation vous a été adressé.");
            setFormData({ email: '', subject: '', message: '' });
          })
          .catch((err) => {
            console.error("Erreur mail utilisateur :", err);
            setSuccess("Message reçu par l'association, mais erreur dans l'envoi du mail de confirmation.");
          })
          .finally(() => setIsSending(false));
      })
      .catch((error) => {
        console.error("Erreur mail à l'association :", error);
        setSuccess("Une erreur est survenue. Veuillez réessayer plus tard.");
        setIsSending(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-lg shadow-soft"
    >
      
      {success && (
        <div className="mb-4 text-sm text-green-600 font-medium">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Votre sujet"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Votre message"
          />
        </div>

        <Button type="submit" variant="goldOutline" fullWidth disabled={isSending}>
          <Send size={18} className="mr-2" />
          {isSending ? "Envoi en cours..." : "Envoyer"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;