"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:dinguibedajunior@gmail.com?subject=Contact depuis le portfolio&body=Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dinguibedajunior@gmail.com",
      href: "mailto:dinguibedajunior@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+225 07 49 79 39 94",
      href: "tel:+2250749793994",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Abidjan, Yopougon Abgayaté",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Beda-Dev",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dingui-beda-junior",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-sm text-accent font-medium tracking-wider uppercase">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance">Travaillons ensemble</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Je suis disponible pour des opportunités de stage, de collaboration ou de projet. N'hésitez pas à me
              contacter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <Card key={info.label} className="border-border/50">
                      <CardContent className="p-4">
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="flex items-center gap-4 hover:text-accent transition-colors"
                          >
                            <div className="p-3 rounded-lg bg-accent/10">
                              <Icon className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">{info.label}</p>
                              <p className="font-medium">{info.value}</p>
                            </div>
                          </Link>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-accent/10">
                              <Icon className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">{info.label}</p>
                              <p className="font-medium">{info.value}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Retrouvez-moi sur</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                      >
                        <Icon className="h-5 w-5 text-accent" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Parlez-moi de votre projet..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
