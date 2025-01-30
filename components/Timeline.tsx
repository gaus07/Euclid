import { useEffect, FC } from 'react';
import { Card } from "@/components/ui/card";

interface TimelineItem {
    date: string;
    title: string;
    description: string;
    icon: string;
    align: 'left' | 'right';
}

const Timeline: FC = () => {
    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll<HTMLElement>('.fade-in');
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const timelineData: TimelineItem[] = [
        {
            date: "2021-22",
            title: "Initial Launch",
            description: "Somaiya  Vidyavihar University Funded Seed Grant project of 1Cr",
            icon: "bi-award",
            align: "right"
        },
        {
            date: "2021-22",
            title: "Expansion Phase",
            description: "Budget Approve in AY 2021-2022 of Rs 25 Lakhs",
            icon: "bi-graph-up",
            align: "left"
        },
        {
            date: "2021-22",
            title: "Expansion Phase",
            description: "Total Expenditure in AY 2021-2022 of Rs 23 Lacks",
            icon: "bi-cpu",
            align: "right"
        },
        {
            date: "2022-23",
            title: "Expansion Phase",
            description: "Budget Approve in AY 2022-2023 of Rs 25 Lakhs",
            icon: "bi-cpu",
            align: "left"
        },
        {
            date: "2022-23",
            title: "Expansion Phase",
            description: "Total Expenditure in AY 2021-2022 of Rs 24 Lacks",
            icon: "bi-cpu",
            align: "right"
        },
        {
            date: "2023-24",
            title: "Expansion Phase",
            description: "Budget proposed and approved for AY 2023-2024 of Rs 50 Lakhs",
            icon: "bi-cpu",
            align: "left"
        }
    ];

    return (
        <div className="min-h-screen p-4 md:p-8 dark:bg-gray-900">
            <style jsx global>{`
        .neo-box {
          border-radius: 12px;
          background: #e0e5ec;
          box-shadow: 8px 8px 16px #babecc,
                     -8px -8px 16px #ffffff;
          transition: all 0.2s ease;
        }
        
        .neo-box:hover {
          box-shadow: 6px 6px 12px #babecc,
                     -6px -6px 12px #ffffff;
          transform: translateY(-2px);
        }
  
        .timeline-dot {
          width: 20px;
          height: 20px;
          background: #e0e5ec;
          border-radius: 50%;
          box-shadow: inset 2px 2px 4px #babecc,
                     inset -2px -2px 4px #ffffff;
        }
  
        .timeline-line {
          width: 2px;
          background: linear-gradient(#babecc, #e0e5ec);
        }
  
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
  
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .neo-box:hover {
          box-shadow: 4px 4px 8px #babecc,
          -4px -4px 8px #ffffff;
          transform: translateY(-2px);
        }
  
        .timeline-dot {
          background: #2563EB;
          box-shadow: inset 2px 2px 4px #1E40AF,
                     inset -2px -2px 4px #2563EB;
        }
  
        .timeline-line {
          background: linear-gradient(#1E40AF, #2563EB);
        }
  
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
  
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-700 dark:text-gray-200">
                    Our Journey
                </h1>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 h-full w-0.5 timeline-line"></div>

                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <div key={index} className="fade-in relative flex items-center md:justify-between">
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-2 md:-translate-x-2.5">
                                    <div className="timeline-dot"></div>
                                </div>
                                <div className={`ml-12 md:ml-0 md:w-5/12 ${item.align === 'right' ? 'md:text-right' : 'md:ml-auto'}`}>
                                    <Card className="neo-box p-6 dark:bg-gray-800 dark:text-white">
                                        <div className={`flex items-center ${item.align === 'right' ? 'justify-start md:justify-end' : ''} gap-3`}>
                                            <i className={`bi ${item.icon} text-2xl text-gray-600 dark:text-gray-300`}></i>
                                            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{item.date}</h3>
                                        </div>
                                        <h4 className="text-lg font-medium mt-2 text-gray-600 dark:text-gray-300">{item.title}</h4>
                                        <p className="mt-2 text-gray-500 dark:text-gray-400">{item.description}</p>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;