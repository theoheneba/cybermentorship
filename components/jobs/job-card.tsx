import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, MapPin, Clock } from 'lucide-react';

export default function JobCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Security Operations Engineer</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                <span>CyberTech Solutions</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Remote</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Full-time</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>SOC</Badge>
              <Badge>SIEM</Badge>
              <Badge>Incident Response</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              We're looking for a Security Operations Engineer to join our SOC team and help protect our infrastructure...
            </p>
          </div>
          <Button>Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}