"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Bell,
  Shield,
  Palette,
  Eye,
  Volume2,
  Type,
  Monitor,
  Moon,
  Sun,
  Contrast,
  MousePointer,
  Keyboard,
} from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Profile
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "",

    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    consultationReminders: true,
    productUpdates: true,

    // Accessibility
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,

    // Appearance
    theme: "system",
    fontSize: "medium",
    colorScheme: "default",

    // Privacy
    dataCollection: true,
    analytics: true,
    personalizedAds: false,
    thirdPartySharing: false,
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    console.log("Settings saved:", settings)
    // Handle save logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Settings</h1>
            <p className="text-xl text-blue-100">Customize your MORARIHUB experience</p>
          </div>
        </div>
      </section>

      {/* Settings Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="accessibility" className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Accessibility</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center space-x-2">
                <Palette className="w-4 h-4" />
                <span className="hidden sm:inline">Appearance</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Privacy</span>
              </TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information and account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={settings.firstName}
                        onChange={(e) => handleSettingChange("firstName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={settings.lastName}
                        onChange={(e) => handleSettingChange("lastName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleSettingChange("email", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 7XXX XXXXXX"
                      value={settings.phone}
                      onChange={(e) => handleSettingChange("phone", e.target.value)}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Account Actions</h3>
                    <div className="flex space-x-4">
                      <Button variant="outline">Change Password</Button>
                      <Button variant="outline">Download Data</Button>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose how you want to be notified about updates and activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-gray-500">Receive notifications via email</p>
                      </div>
                      <Switch
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-gray-500">Receive push notifications in your browser</p>
                      </div>
                      <Switch
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Marketing Emails</Label>
                        <p className="text-sm text-gray-500">Receive promotional and marketing content</p>
                      </div>
                      <Switch
                        checked={settings.marketingEmails}
                        onCheckedChange={(checked) => handleSettingChange("marketingEmails", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Consultation Reminders</Label>
                        <p className="text-sm text-gray-500">Get reminded about upcoming consultations</p>
                      </div>
                      <Switch
                        checked={settings.consultationReminders}
                        onCheckedChange={(checked) => handleSettingChange("consultationReminders", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Product Updates</Label>
                        <p className="text-sm text-gray-500">Notifications about new products and features</p>
                      </div>
                      <Switch
                        checked={settings.productUpdates}
                        onCheckedChange={(checked) => handleSettingChange("productUpdates", checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Accessibility Settings */}
            <TabsContent value="accessibility">
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Options</CardTitle>
                  <CardDescription>Customize the interface to meet your accessibility needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5 flex items-center">
                        <Contrast className="w-5 h-5 mr-3 text-gray-600" />
                        <div>
                          <Label>High Contrast Mode</Label>
                          <p className="text-sm text-gray-500">Increase contrast for better visibility</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.highContrast}
                        onCheckedChange={(checked) => handleSettingChange("highContrast", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5 flex items-center">
                        <Type className="w-5 h-5 mr-3 text-gray-600" />
                        <div>
                          <Label>Large Text</Label>
                          <p className="text-sm text-gray-500">Increase text size for better readability</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.largeText}
                        onCheckedChange={(checked) => handleSettingChange("largeText", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5 flex items-center">
                        <MousePointer className="w-5 h-5 mr-3 text-gray-600" />
                        <div>
                          <Label>Reduced Motion</Label>
                          <p className="text-sm text-gray-500">Minimize animations and transitions</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.reducedMotion}
                        onCheckedChange={(checked) => handleSettingChange("reducedMotion", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5 flex items-center">
                        <Volume2 className="w-5 h-5 mr-3 text-gray-600" />
                        <div>
                          <Label>Screen Reader Support</Label>
                          <p className="text-sm text-gray-500">Optimize for screen reader compatibility</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.screenReader}
                        onCheckedChange={(checked) => handleSettingChange("screenReader", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5 flex items-center">
                        <Keyboard className="w-5 h-5 mr-3 text-gray-600" />
                        <div>
                          <Label>Keyboard Navigation</Label>
                          <p className="text-sm text-gray-500">Enhanced keyboard navigation support</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.keyboardNavigation}
                        onCheckedChange={(checked) => handleSettingChange("keyboardNavigation", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5 flex items-center">
                        <Eye className="w-5 h-5 mr-3 text-gray-600" />
                        <div>
                          <Label>Focus Indicators</Label>
                          <p className="text-sm text-gray-500">Enhanced focus indicators for navigation</p>
                        </div>
                      </div>
                      <Switch
                        checked={settings.focusIndicators}
                        onCheckedChange={(checked) => handleSettingChange("focusIndicators", checked)}
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Accessibility Resources</h4>
                    <p className="text-sm text-blue-800 mb-3">
                      Need additional accessibility support? We're here to help.
                    </p>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
                      Contact Accessibility Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Preferences</CardTitle>
                  <CardDescription>Customize the look and feel of your MORARIHUB experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select value={settings.theme} onValueChange={(value) => handleSettingChange("theme", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">
                            <div className="flex items-center">
                              <Sun className="w-4 h-4 mr-2" />
                              Light
                            </div>
                          </SelectItem>
                          <SelectItem value="dark">
                            <div className="flex items-center">
                              <Moon className="w-4 h-4 mr-2" />
                              Dark
                            </div>
                          </SelectItem>
                          <SelectItem value="system">
                            <div className="flex items-center">
                              <Monitor className="w-4 h-4 mr-2" />
                              System
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Font Size</Label>
                      <Select
                        value={settings.fontSize}
                        onValueChange={(value) => handleSettingChange("fontSize", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="extra-large">Extra Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Color Scheme</Label>
                      <Select
                        value={settings.colorScheme}
                        onValueChange={(value) => handleSettingChange("colorScheme", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default (Blue)</SelectItem>
                          <SelectItem value="warm">Warm (Orange/Red)</SelectItem>
                          <SelectItem value="cool">Cool (Blue/Purple)</SelectItem>
                          <SelectItem value="neutral">Neutral (Gray)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Preview</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-white rounded border">
                        <h5 className="font-medium">Sample Card</h5>
                        <p className="text-sm text-gray-600">
                          This is how content will appear with your current settings.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Data</CardTitle>
                  <CardDescription>Control how your data is collected and used</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Data Collection</Label>
                        <p className="text-sm text-gray-500">Allow collection of usage data to improve services</p>
                      </div>
                      <Switch
                        checked={settings.dataCollection}
                        onCheckedChange={(checked) => handleSettingChange("dataCollection", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Analytics</Label>
                        <p className="text-sm text-gray-500">Help us understand how you use our platform</p>
                      </div>
                      <Switch
                        checked={settings.analytics}
                        onCheckedChange={(checked) => handleSettingChange("analytics", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Personalized Ads</Label>
                        <p className="text-sm text-gray-500">Show ads based on your interests and activity</p>
                      </div>
                      <Switch
                        checked={settings.personalizedAds}
                        onCheckedChange={(checked) => handleSettingChange("personalizedAds", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Third-Party Sharing</Label>
                        <p className="text-sm text-gray-500">Share data with trusted partners for better services</p>
                      </div>
                      <Switch
                        checked={settings.thirdPartySharing}
                        onCheckedChange={(checked) => handleSettingChange("thirdPartySharing", checked)}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Data Management</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline">Download My Data</Button>
                      <Button variant="outline">Request Data Deletion</Button>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-900 mb-2">Privacy Notice</h4>
                    <p className="text-sm text-yellow-800">
                      Your privacy is important to us. Read our{" "}
                      <a href="/privacy" className="underline hover:no-underline">
                        Privacy Policy
                      </a>{" "}
                      to learn more about how we protect your data.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} size="lg" className="bg-blue-600 hover:bg-blue-700">
              Save All Settings
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
