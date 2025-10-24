"use client";

import { Avatar, Button, Flex, Heading, Icon, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources";

export default function QRCodePage() {
    const contactInfo = {
        name: "Ketan Thorat",
        phone1: "8356906140",
        phone2: "7888073833",
        email: "ketanthorat.ai@gmail.com",
        company: "Robonex Innovations",
        title: "Founder",
        address: "Maharashtra, India",
        website: "www.ketanthorat.com",
        role: person.role
    };

    const socialLinks = [
        { name: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/ketanthorat.ai' },
        { name: 'LinkedIn', icon: 'linkedin', link: 'https://www.linkedin.com/in/ketanthorat' },
    ];

    const handleSaveContact = () => {
        // Get social media links
        const linkedin = 'https://www.linkedin.com/in/ketanthorat';
        const instagram = 'https://www.instagram.com/ketanthorat.ai';

        // Create vCard content
        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
N:Thorat;Ketan;;;
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
TEL;TYPE=CELL:+91${contactInfo.phone1}
TEL;TYPE=CELL:+91${contactInfo.phone2}
EMAIL:${contactInfo.email}
ADR;TYPE=WORK:;;Nashik, Maharashtra, India;;;;
URL:https://${contactInfo.website}
URL:${linkedin}
URL:${instagram}
NOTE:${contactInfo.role} - Robotics engineer specializing in AI-driven automation, ROS2, and intelligent systems.
END:VCARD`;

        // Create blob and download
        const blob = new Blob([vCard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${contactInfo.name.replace(' ', '_')}.vcf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <Flex
            fillWidth
            direction="column"
            alignItems="center"
            justifyContent="center"
            padding="l"
            gap="l"
            style={{ maxWidth: '480px', margin: '0 auto', minHeight: '100vh' }}
        >
            {/* Profile Section */}
            <Flex
                direction="column"
                alignItems="center"
                gap="m"
                style={{ textAlign: 'center' }}
            >
                <Avatar
                    size="xl"
                    src={person.avatar}
                />
                
                <Flex direction="column" gap="xs" alignItems="center">
                    <Heading variant="display-strong-l">
                        {person.name}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                        {person.role}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        📍 Nashik, Maharashtra
                    </Text>
                </Flex>

                <Text 
                    variant="body-default-m" 
                    onBackground="neutral-medium"
                    style={{ maxWidth: '400px' }}
                >
                    Robotics engineer specializing in AI-driven automation, ROS2, and intelligent systems.
                </Text>
            </Flex>

            {/* Save Contact Button */}
            <Flex fillWidth style={{ maxWidth: '400px' }}>
                <Button
                    onClick={handleSaveContact}
                    variant="primary"
                    size="l"
                    fillWidth
                    prefixIcon="download"
                >
                    Save Contact
                </Button>
            </Flex>

            {/* Contact Details */}
            <Flex
                direction="column"
                gap="xs"
                padding="m"
                radius="l"
                border="neutral-medium"
                background="surface"
                style={{ maxWidth: '400px', width: '100%' }}
            >
                <Text variant="label-default-s" onBackground="neutral-weak">
                    Contact Information
                </Text>
                <Flex direction="column" gap="xs">
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        📞 +91 {contactInfo.phone1} / +91 {contactInfo.phone2}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        ✉️ {contactInfo.email}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        🏢 {contactInfo.company} ({contactInfo.title})
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        📍 Nashik, Maharashtra, India
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        🌐 {contactInfo.website}
                    </Text>
                </Flex>
            </Flex>

            {/* Explore Profile Button */}
            <Flex fillWidth style={{ maxWidth: '400px' }}>
                <Button
                    href="https://ketanthorat.com/"
                    variant="secondary"
                    size="l"
                    fillWidth
                    prefixIcon="globe"
                >
                    Explore Profile
                </Button>
            </Flex>

            {/* Social Media Section */}
            <Flex
                direction="column"
                fillWidth
                gap="m"
                style={{ maxWidth: '400px' }}
            >
                <Text 
                    variant="heading-strong-l" 
                    align="center"
                    onBackground="neutral-strong"
                >
                    Social Media
                </Text>
                <Flex
                    direction="row"
                    fillWidth
                    gap="m"
                    justifyContent="center"
                >
                    {socialLinks.map((item, index) => (
                        <Button
                            key={index}
                            href={item.link}
                            variant="secondary"
                            size="l"
                            prefixIcon={item.icon}
                            style={{
                                flex: 1,
                                minWidth: '0'
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
}
