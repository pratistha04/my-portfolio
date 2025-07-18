import React from 'react';
import { personalInfo, skillsData } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { User, GraduationCap, MapPin, Code, Database, Wrench, Monitor } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages',
      items: skillsData.languages,
      icon: <Code className="h-5 w-5" />,
      color: 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
    },
    {
      title: 'Frameworks & Libraries',
      items: skillsData.frameworks,
      icon: <Wrench className="h-5 w-5" />,
      color: 'bg-green-500/10 text-green-700 dark:text-green-300'
    },
    {
      title: 'Databases',
      items: skillsData.databases,
      icon: <Database className="h-5 w-5" />,
      color: 'bg-orange-500/10 text-orange-700 dark:text-orange-300'
    },
    {
      title: 'Tools',
      items: skillsData.tools,
      icon: <Monitor className="h-5 w-5" />,
      color: 'bg-purple-500/10 text-purple-700 dark:text-purple-300'
    },
    {
      title: 'Operating Systems',
      items: skillsData.os,
      icon: <Monitor className="h-5 w-5" />,
      color: 'bg-pink-500/10 text-pink-700 dark:text-pink-300'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Get to know more about my journey and skills
            </p>
          </div>

          {/* Personal Info Card */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Education
                  </h3>
                  <p className="text-muted-foreground">
                    {personalInfo.education}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {personalInfo.university}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Bio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {category.icon}
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className={`${category.color} hover:scale-105 transition-transform`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Academic Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple projects in machine learning, web development, and data science
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hackathons</h4>
                    <p className="text-sm text-muted-foreground">
                      Participated in various hackathons and coding competitions
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Personal Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Built various applications showcasing different technologies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Passionate about AI/ML algorithms and their real-world applications
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Web Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building responsive and user-friendly web applications
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Science</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyzing data to extract meaningful insights and patterns
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;