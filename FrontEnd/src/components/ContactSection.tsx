import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
const API_URL = import.meta.env.VITE_BACKEND_API;

// const API_URL =import.meta.env.BACKEND_API;


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch(`${API_URL}/send-email`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/uma-venkata-siva-sai-6951242b7",
      handle: "@uma-venkata-siva-sai",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/umasai01",
      handle: "@umasai01",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:umasai5104@gmail.com",
      handle: "umasai5104@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm open to exciting job opportunities — feel free to approach me!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-display font-bold mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="You can contact me here… "
                rows={6}
                required
              />
              <Button type="submit" className="w-full" disabled={loading}>
                <Send className="mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border rounded hover:scale-105 transition"
                >
                  <Icon className="h-6 w-6 mr-4" />
                  <div>
                    <p>{social.name}</p>
                    <p className="text-sm text-gray-500">{social.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
