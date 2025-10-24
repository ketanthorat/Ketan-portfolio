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

    const handleSaveContact = () => {
        // Get social media links
        const github = social.find(s => s.name === 'GitHub')?.link || '';
        const linkedin = social.find(s => s.name === 'LinkedIn')?.link || '';
        const twitter = social.find(s => s.name === 'X')?.link || '';
        const instagram = social.find(s => s.name === 'Instagram')?.link || '';
        const youtube = social.find(s => s.name === 'YouTube')?.link || '';

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
ADR;TYPE=WORK:;;${contactInfo.address};;;;
URL:https://${contactInfo.website}
URL:${github}
URL:${linkedin}
URL:${twitter}
URL:${instagram}
URL:${youtube}
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
            minHeight="100vh"
            direction="column"
            alignItems="center"
            justifyContent="center"
            padding="l"
            gap="l"
            style={{ maxWidth: '480px', margin: '0 auto' }}
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
                    alt={person.name}
                />
                
                <Flex direction="column" gap="xs" alignItems="center">
                    <Heading variant="display-strong-l">
                        {person.name}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                        {person.role}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                        📍 {person.location.replace('Asia/', '')}
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
                        📞 {contactInfo.phone1} / {contactInfo.phone2}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        ✉️ {contactInfo.email}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        🏢 {contactInfo.company} ({contactInfo.title})
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        📍 {contactInfo.address}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                        🌐 {contactInfo.website}
                    </Text>
                </Flex>
            </Flex>

            {/* Social Links */}
            <Flex
                direction="column"
                fillWidth
                gap="s"
                style={{ maxWidth: '400px' }}
            >
                {social.map((item, index) => {
                    const isEmail = item.name === 'Email';
                    const href = isEmail ? `mailto:${item.link}` : item.link;
                    
                    return (
                        <Button
                            key={index}
                            href={href}
                            variant="secondary"
                            size="l"
                            fillWidth
                            prefixIcon={item.icon}
                            style={{
                                justifyContent: 'flex-start',
                                textAlign: 'left'
                            }}
                        >
                            <Flex fillWidth justifyContent="space-between" alignItems="center">
                                <Text variant="body-default-m">
                                    {item.name}
                                </Text>
                                <Icon name="chevronRight" size="s" />
                            </Flex>
                        </Button>
                    );
                })}
            </Flex>

            {/* Languages */}
            <Flex
                direction="column"
                gap="xs"
                alignItems="center"
                style={{ marginTop: '1rem' }}
            >
                <Text variant="label-default-s" onBackground="neutral-weak">
                    Languages
                </Text>
                <Text variant="body-default-s" onBackground="neutral-medium">
                    {person.languages.join(' • ')}
                </Text>
            </Flex>
        </Flex>
    );
}
