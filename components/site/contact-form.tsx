"use client"

import { useState } from "react"
import { company } from "@/data/site"
import { services } from "@/data/services"

const fieldClass =
  "w-full border-0 border-b border-navy-950/20 bg-transparent px-0 py-3 text-navy-950 placeholder:text-navy-400 transition-colors focus:border-ember-600 focus:outline-none focus:ring-0"

const labelClass = "text-sm font-semibold text-navy-950"

// There is no form backend yet, so the form opens the visitor's email app with the message filled in.
export default function ContactForm() {
  const [opened, setOpened] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const service = String(data.get("service") || "General enquiry")
    const body = [
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("organisation") || "-"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Service: ${service}`,
      "",
      String(data.get("message")),
    ].join("\n")

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Website enquiry: ${service}`,
    )}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
      <label className="block">
        <span className={labelClass}>Full name</span>
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Organisation</span>
        <input name="organisation" autoComplete="organization" className={fieldClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Email</span>
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>Service</span>
        <select name="service" defaultValue="" className={`${fieldClass} cursor-pointer`}>
          <option value="">General enquiry</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="KRA Aviation Club">KRA Aviation Club</option>
          <option value="Partnership or investment">Partnership or investment</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className={labelClass}>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Dates, route, passenger numbers or anything else we should know"
          className={`${fieldClass} resize-none`}
        />
      </label>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {opened
            ? `Your email app should now be open. If it did not open, email us at ${company.email}.`
            : "Sending opens your email app with this message filled in."}
        </p>
        <button type="submit" className="btn btn-primary btn-lg shrink-0">
          Send enquiry
        </button>
      </div>
    </form>
  )
}
