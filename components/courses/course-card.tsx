import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users } from 'lucide-react';

export default function CourseCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            alt="Course thumbnail"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <Badge className="mb-2">Advanced</Badge>
          <h3 className="text-xl font-semibold mb-2">Advanced Penetration Testing</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Learn advanced penetration testing techniques used by professional ethical hackers.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>12 weeks</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>156 enrolled</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-6">
        <Button className="w-full">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
}