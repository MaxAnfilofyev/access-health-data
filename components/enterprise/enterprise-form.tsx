"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const roles = [
  "CTO / Head of Engineering",
  "Founder",
  "Product Lead",
  "Engineering Manager",
  "Data / Analytics Lead",
  "Other",
]

const volumeOptions = ["100–500 GB", "500–2,000 GB", "2–10 TB", "10–50 TB", "50+ TB"]

const useCases = [
  "Nationwide medical history retrieval",
  "Normalized FHIR data for analytics",
  "Care navigation / quality workflows",
  "Pre-visit planning population pulls",
  "Chronic disease management",
  "Telehealth / urgent care",
  "RPM",
  "Research",
  "Other",
]

const timelines = ["Immediately", "Within 30 days", "1–3 months", "3–6 months", "Just exploring"]

export function EnterpriseForm() {
  const [workingWithPhi, setWorkingWithPhi] = useState<string | undefined>()
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([])

  const toggleUseCase = (useCase: string) => {
    setSelectedUseCases((prev) => (prev.includes(useCase) ? prev.filter((u) => u !== useCase) : [...prev, useCase]))
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <h2 className="mb-6 text-xl font-semibold text-foreground">Request Enterprise Access</h2>

      <form className="space-y-6">
        {/* Contact Info */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Contact Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Your company" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Company Website</Label>
            <Input id="website" type="url" placeholder="https://company.com" />
          </div>
        </div>

        {/* Role */}
        <div className="space-y-2">
          <Label>Role</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role.toLowerCase().replace(/\s+/g, "-")}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Volume */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Expected Monthly Processing Volume</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select volume" />
              </SelectTrigger>
              <SelectContent>
                {volumeOptions.map((option) => (
                  <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, "-")}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Expected Monthly Storage Volume</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select volume" />
              </SelectTrigger>
              <SelectContent>
                {volumeOptions.map((option) => (
                  <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, "-")}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Use Cases */}
        <div className="space-y-3">
          <Label>Primary Use Case (select all that apply)</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-2">
                <Checkbox
                  id={useCase.toLowerCase().replace(/\s+/g, "-")}
                  checked={selectedUseCases.includes(useCase)}
                  onCheckedChange={() => toggleUseCase(useCase)}
                />
                <Label
                  htmlFor={useCase.toLowerCase().replace(/\s+/g, "-")}
                  className="text-sm font-normal text-muted-foreground cursor-pointer"
                >
                  {useCase}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* PHI Questions */}
        <div className="space-y-4 rounded-lg bg-muted p-4">
          <div className="space-y-3">
            <Label>Are you working with PHI?</Label>
            <RadioGroup value={workingWithPhi} onValueChange={setWorkingWithPhi}>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="phi-yes" />
                  <Label htmlFor="phi-yes" className="font-normal cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="phi-no" />
                  <Label htmlFor="phi-no" className="font-normal cursor-pointer">
                    No
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {workingWithPhi === "yes" && (
            <div className="space-y-3 border-t border-border pt-4">
              <Label>Do you require a BAA?</Label>
              <RadioGroup>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="baa-yes" />
                    <Label htmlFor="baa-yes" className="font-normal cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="baa-no" />
                    <Label htmlFor="baa-no" className="font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>

        {/* VPC */}
        <div className="space-y-3">
          <Label>Do you require VPC peering or private cluster deployment?</Label>
          <RadioGroup>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="vpc-yes" />
                <Label htmlFor="vpc-yes" className="font-normal cursor-pointer">
                  Yes
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="vpc-no" />
                <Label htmlFor="vpc-no" className="font-normal cursor-pointer">
                  No
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <Label>Timeline to Go Live</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((timeline) => (
                <SelectItem key={timeline} value={timeline.toLowerCase().replace(/\s+/g, "-")}>
                  {timeline}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <Textarea
            id="notes"
            placeholder="Tell us more about your use case, integration requirements, or any questions..."
            rows={4}
          />
        </div>

        {/* Submit */}
        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Submit Request for Enterprise Access
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Prefer to talk to engineering directly?{" "}
          <a href="mailto:enterprise@accesshealthdata.com" className="font-medium text-primary hover:underline">
            Email enterprise@accesshealthdata.com
          </a>
        </p>
      </form>
    </div>
  )
}
