export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Alice Johnson',
    role: 'Engineering Manager',
    company: 'TechCorp Solutions',
    quote: 'Himanshu is an exceptional engineer. His ability to bridge the gap between frontend development and QA automation is rare and highly valuable.'
  },
  {
    id: 't2',
    name: 'Robert Smith',
    role: 'Senior Developer',
    company: 'Innovate Systems',
    quote: 'Collaborating with Himanshu on our CI/CD pipelines significantly reduced our deployment times. He brings a deep understanding of both quality and development workflows.'
  },
  {
    id: 't3',
    name: 'Sarah Williams',
    role: 'QA Lead',
    company: 'FinTech Dynamics',
    quote: 'His work on the automation reporting dashboard completely transformed how we view our test results. He is a truly collaborative and skilled professional.'
  }
];
