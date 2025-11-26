"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const roles = [
  "CTO / Head of Engineering",
  "Founder",
  "Product Lead",
  "Engineering Manager",
  "Data / Analytics Lead",
  "Compliance Lead",
  "Other",
]

const primaryPurposes = [
  "Treatment (provider or provider vendor)",
  "Payment",
  "Healthcare Operations",
  "Individual Access (patient-authorized)",
  "Research",
  "Not sure — help me classify my use case",
]

const endUserTypes = [
  "Physicians / provider groups",
  "ACOs / CINs / IPAs",
  "Telehealth organizations",
  "Digital health vendors selling to providers",
  "Patient-facing tools",
  "Other",
]

const dataRetrievalModels = [
  "Retrieving nationwide data for patients attributed to providers",
  "Retrieving data for patients engaged via telehealth",
  "Retrieving data to support care coordination / quality",
  "Retrieving data via explicit patient consent",
  "Other / not sure",
]

const patientVolumeOptions = [
  "< 10,000",
  "10,000–50,000",
  "50,000–150,000",
  "150,000–500,000",
  "500,000+",
]

const encountersPerMonthOptions = [
  "< 5,000",
  "5,000–25,000",
  "25,000–100,000",
  "100,000–500,000",
  "500,000+",
]

const documentsPerMonthOptions = [
  "< 5,000",
  "5,000–50,000",
  "50,000–200,000",
  "200,000–1,000,000",
  "1,000,000+",
]

const timelines = [
  "Immediately",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "Just exploring",
]

export function EnterpriseForm() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <h2 className="mb-6 text-xl font-semibold text-foreground">Request Enterprise Access</h2>

      <form className="space-y-8">
        {/* Organization Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Organization Details</h3>
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

          <div className="space-y-2">
            <Label>Your Role</Label>
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
        </div>

        {/* Permitted Use & Workflow */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Permitted Use & Workflow</h3>

          <div className="space-y-2">
            <Label>Primary Purpose for Accessing Clinical Data (required)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select the permitted purpose" />
              </SelectTrigger>
              <SelectContent>
                {primaryPurposes.map((purpose) => (
                  <SelectItem key={purpose} value={purpose.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}>
                    {purpose}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>End User Type — Who ultimately uses your application?</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select end user type" />
              </SelectTrigger>
              <SelectContent>
                {endUserTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Data Retrieval Model — How will records be accessed?</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select data retrieval model" />
              </SelectTrigger>
              <SelectContent>
                {dataRetrievalModels.map((model) => (
                  <SelectItem key={model} value={model.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}>
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Business Scale */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Business Scale</h3>

          <div className="space-y-2">
            <Label>How many unique patients does your organization manage per year?</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select patient volume" />
              </SelectTrigger>
              <SelectContent>
                {patientVolumeOptions.map((option) => (
                  <SelectItem key={option} value={option.toLowerCase().replace(/[<>,\s+]/g, "").replace("-","to")}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>How many clinical encounters do you process per month?</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select encounter volume" />
              </SelectTrigger>
              <SelectContent>
                {encountersPerMonthOptions.map((option) => (
                  <SelectItem key={option} value={option.toLowerCase().replace(/[<>,\s+]/g, "").replace("-","to")}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>How many clinical documents do you expect to retrieve or upload monthly? (C-CDAs, HL7 messages, notes, labs, PDFs)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select document volume" />
              </SelectTrigger>
              <SelectContent>
                {documentsPerMonthOptions.map((option) => (
                  <SelectItem key={option} value={option.toLowerCase().replace(/[<>,\s+]/g, "").replace("-","to")}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Do you need to store longitudinal patient records?</Label>
            <RadioGroup>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="longitudinal-yes" />
                  <Label htmlFor="longitudinal-yes" className="font-normal cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="longitudinal-no" />
                  <Label htmlFor="longitudinal-no" className="font-normal cursor-pointer">
                    No (episodic / immediate-use workflows)
                  </Label>
                </div>
                <div className="flex items-center gap-8">
                  <RadioGroupItem value="not-sure" id="longitudinal-notsure" />
                  <Label htmlFor="longitudinal-notsure" className="font-normal cursor-pointer">
                    Not sure yet
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Compliance Needs */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Compliance Needs</h3>

          <div className="space-y-3">
            <Label>Do you require a Business Associate Agreement (BAA)?</Label>
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
                    Not yet / evaluating
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>Do you need dedicated infrastructure (VPC peering or private cluster)?</Label>
            <RadioGroup>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="dedicated-yes" />
                  <Label htmlFor="dedicated-yes" className="font-normal cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="dedicated-no" />
                  <Label htmlFor="dedicated-no" className="font-normal cursor-pointer">
                    No
                  </Label>
                </div>
                <div className="flex items-center gap-8">
                  <RadioGroupItem value="not-sure" id="dedicated-notsure" />
                  <Label htmlFor="dedicated-notsure" className="font-normal cursor-pointer">
                    Not sure
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>Do you need documentation for security review or vendor assessment?</Label>
            <RadioGroup>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="docs-yes" />
                  <Label htmlFor="docs-yes" className="font-normal cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="docs-no" />
                  <Label htmlFor="docs-no" className="font-normal cursor-pointer">
                    No
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Timeline & Notes */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Timeline & Notes</h3>

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

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (optional)</Label>
            <Textarea
              id="notes"
              placeholder="Tell us more about your use case..."
              rows={4}
            />
          </div>
        </div>

        {/* Submit */}
        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Submit Request for Enterprise Access
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Prefer direct contact?{" "}
          <a href="mailto:enterprise@accesshealthdata.com" className="font-medium text-primary hover:underline">
            Email: enterprise@accesshealthdata.com
          </a>
        </p>
      </form>
    </div>
  )
}
