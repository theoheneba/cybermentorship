"use client";

import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import JobCard from '@/components/jobs/job-card';

export default function JobsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Cybersecurity Jobs</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search jobs..." 
                className="pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Location" 
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-6">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </motion.div>
      </div>
    </main>
  );
}