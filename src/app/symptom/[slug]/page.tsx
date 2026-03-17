import { STATIC_PARTS } from "@/lib/static-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Static calculation to match what we put in allSymptoms.json
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

interface SymptomPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const allSymptoms = new Set<string>();
  STATIC_PARTS.forEach(part => {
    part.symptoms.forEach(s => allSymptoms.add(s.description));
  });

  return Array.from(allSymptoms).map(description => ({
    slug: slugify(description)
  }));
}

export default async function SymptomPage({ params }: SymptomPageProps) {
  const { slug } = await params;
  
  // Find all parts linked to this symptom slug
  const matchedParts = STATIC_PARTS.filter(part => 
    part.symptoms.some(s => slugify(s.description) === slug)
  );

  if (matchedParts.length === 0) {
    notFound();
  }

  const symptomName = matchedParts[0].symptoms.find(s => slugify(s.description) === slug)?.description || slug;

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="border-b border-[#333333] bg-[#1a1a1a]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold">
            Parts<span className="text-[#f96706]">Direct</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-amber-500" size={32} />
            <h1 className="text-4xl font-bold capitalize">{symptomName}</h1>
          </div>

          <p className="text-xl text-gray-400 mb-12">
            If your vehicle is experiencing "{symptomName}", it may be caused by a failure in one of the following components. 
            Below are the most likely parts requiring replacement and diagnostic steps.
          </p>

          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Wrench className="text-[#f96706]" size={24} />
            Recommended Replacement Parts
          </h2>

          <div className="grid gap-6">
            {matchedParts.map(part => {
              const symptomDetails = part.symptoms.find(s => slugify(s.description) === slug);
              return (
                <div key={part.id} className="bg-[#1e1e1e] border border-[#333333] rounded-xl p-6 hover:border-[#f96706]/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-[#333333] text-gray-300">{part.brand}</Badge>
                        <Badge className={`
                          ${symptomDetails?.severity === 'Critical' ? 'bg-red-500/20 text-red-400' : ''}
                          ${symptomDetails?.severity === 'High' ? 'bg-orange-500/20 text-orange-400' : ''}
                          ${symptomDetails?.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                          ${symptomDetails?.severity === 'Low' ? 'bg-green-500/20 text-green-400' : ''}
                        `}>
                          Severity: {symptomDetails?.severity}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{part.name}</h3>
                      <p className="text-sm text-gray-500 mb-4">Part #{part.part_number}</p>
                      
                      <div className="bg-[#2a2a2a] p-4 rounded-lg mb-4">
                        <p className="text-sm font-semibold text-[#f96706] mb-2 uppercase tracking-wider">Diagnostic Steps:</p>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                          {symptomDetails?.diagnostic_steps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-3 min-w-[150px]">
                      <p className="text-2xl font-bold text-white">${part.price.toFixed(2)}</p>
                      <Link href={`/p/${part.part_number}`} className="w-full">
                        <Button className="w-full bg-[#f96706] hover:bg-orange-600">
                          View Part Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-[#1e1e1e] to-[#121212] border border-[#333333] rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Still not sure?</h2>
            <p className="text-gray-400 mb-6">
              Diagnostic codes like P0300 or P0171 can help narrow down the exact cause. 
              We recommend using an OBD-II scanner to confirm these symptoms before purchasing parts.
            </p>
            <Button variant="outline" className="border-[#333333] text-white hover:bg-[#2a2a2a]">
              Learn how to DIY Diagnose
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#333333] mt-24 py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2026 PartsDirect. Technical reliability is our priority.</p>
        </div>
      </footer>
    </div>
  );
}
