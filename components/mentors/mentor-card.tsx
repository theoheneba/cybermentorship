import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MentorCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
            alt="Mentor profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p className="text-muted-foreground text-sm mb-4">Senior Security Engineer at CyberTech</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Penetration Testing</Badge>
            <Badge>Cloud Security</Badge>
            <Badge>Incident Response</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            10+ years of experience in cybersecurity, specializing in cloud infrastructure security and penetration testing.
          </p>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-6">
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  );
}