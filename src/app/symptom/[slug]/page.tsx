import { STATIC_PARTS } from "@/lib/static-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Wrench, ArrowRight, ShieldAlert, Clock, Phone, MapPin, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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

export async function generateMetadata({ params }: SymptomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const matchedParts = STATIC_PARTS.filter(part => 
    part.symptoms.some(s => slugify(s.description) === slug)
  );

  if (matchedParts.length === 0) return { title: 'Symptom Not Found' };

  const symptom = matchedParts[0].symptoms.find(s => slugify(s.description) === slug)?.description || slug;
  const vehicle = "GMC Sierra / Chevy Silverado";
  
  const title = `${symptom} - ${vehicle} (Fix & Cost)`;
  const description = `Is your ${vehicle} experiencing ${symptom}? Learn the likely causes, estimated repair costs, and symptoms of a failing part. Fix it today.`;

  return {
    title,
    description,
  };
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
  
  const matchedParts = STATIC_PARTS.filter(part => 
    part.symptoms.some(s => slugify(s.description) === slug)
  );

  if (matchedParts.length === 0) {
    notFound();
  }

  const firstPart = matchedParts[0];
  const symptomData = firstPart.symptoms.find(s => slugify(s.description) === slug);
  const symptomName = symptomData?.description || slug;

  const relatedSymptoms = firstPart.symptoms
    .filter(s => slugify(s.description) !== slug)
    .slice(0, 1);
  
  const otherRelatedSymptoms = STATIC_PARTS
    .filter(p => !matchedParts.includes(p))
    .flatMap(p => p.symptoms)
    .filter(s => slugify(s.description) !== slug)
    .slice(0, 1);

  // Lead Gen Injection Metadata (LocalBusiness Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Local GMC/Chevy Repair Specialist",
    "description": `Professional diagnosis and repair for ${symptomName} on GMC Sierra and Chevy Silverado models. Same-day service available.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "ST"
    },
    "telephone": "1-800-REPAIR-NOW", // Placeholder for lead gen number
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-zinc-100 bg-white/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter text-orange-600">
            PARTS<span className="text-zinc-900">DIRECT</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
              {symptomName} in GMC Sierra/Silverado
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl">
              Technical diagnostic guide for modern V8 platforms. Identify the failure point, estimated costs, and verified replacement parts.
            </p>
          </div>

          {/* Mechanic Verdict Box */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 bg-zinc-50 border-2 border-zinc-900 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6 text-orange-600">
                <ShieldAlert size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Mechanic Verdict</span>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Severity</p>
                  <p className={`text-lg font-bold ${symptomData?.severity === 'Critical' ? 'text-red-600' : 'text-zinc-900'}`}>
                    {symptomData?.severity || 'Medium'}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Safe to Drive</p>
                  <p className="text-lg font-bold">{symptomData?.drivable ? 'Yes (Limited)' : 'No - Immediate Fix'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Likely Cause</p>
                  <p className="text-lg font-bold">{firstPart.name}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Estimated Cost</p>
                  <p className="text-lg font-bold">${firstPart.price} - ${firstPart.price + 200}</p>
                </div>
              </div>
            </div>

            {/* Recommended Fix CTA Card */}
            <div className="bg-orange-600 rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl mb-2">Recommended Fix</h3>
                <p className="text-orange-100 text-sm mb-6">
                  Verified {firstPart.brand} {firstPart.category} part for your specific VIN.
                </p>
              </div>
              <Link href={`/part/${firstPart.part_number}`}>
                <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold h-14 text-lg">
                  Check price
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mid-Page Comparison Injection: Force traffic to decisions */}
          <div className="mb-16 p-1 bg-zinc-900 rounded-3xl shadow-xl overflow-hidden group">
            <div className="bg-zinc-900 p-8 text-white relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <ShieldCheck size={120} />
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                <Star size={12} fill="currentColor" />
                Expert Recommendation
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tight">Best {firstPart.category} to Fix This Issue</h3>
              <p className="text-zinc-400 mb-8 max-w-xl font-medium leading-relaxed">
                Don't guess on quality. We've audited the top {firstPart.category} brands for your Silverado. See which one wins on durability vs. price.
              </p>
              <Link href={`/compare/best-${slugify(firstPart.category)}-chevy-silverado-1500`}>
                <Button className="bg-white text-zinc-900 hover:bg-zinc-100 font-black h-14 px-8 text-lg">
                  View Comparison Guide
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Lead Gen Injection: Get Help Near You */}
          <div className="mb-16 bg-zinc-900 rounded-2xl p-8 text-white border-l-8 border-orange-600">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Need this fixed today?</h2>
                <p className="text-zinc-400 mb-0">
                  {symptomData?.severity === 'Critical' 
                    ? "Warning: Driving with this symptom may cause permanent engine damage. Secure a local diagnostic immediately."
                    : "Low on time? Get professional installation and same-day repair from a certified local shop."}
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <Button className="bg-orange-600 hover:bg-orange-700 font-bold h-12 px-8 flex items-center gap-2">
                  <MapPin size={18} />
                  Find a mechanic near you
                </Button>
                <a href="tel:1-800-REPAIR-NOW" className="flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors py-2 font-bold border border-zinc-700 rounded-lg">
                  <Phone size={18} />
                  Call now for a quote
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Wrench className="text-orange-600" size={24} />
            Diagnostic Protocol & Replacement Components
          </h2>

          <div className="grid gap-8">
            {matchedParts.map(part => {
              const matchedSymptom = part.symptoms.find(s => slugify(s.description) === slug);
              return (
                <div key={part.id} className="border-2 border-zinc-100 rounded-2xl p-8 hover:border-orange-200 transition-all group">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="border-zinc-200 text-zinc-500 uppercase tracking-widest text-[10px]">{part.brand}</Badge>
                        <Badge className="bg-orange-100 text-orange-600 border-none px-3 py-1 font-bold">{matchedSymptom?.urgency}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                        {part.name}
                      </h3>
                      
                      <p className="text-zinc-500 mb-6 leading-relaxed">
                        A <Link href={`/part/${part.part_number}`} className="text-zinc-900 font-bold border-b-2 border-orange-200 hover:border-orange-500 transition-all capitalize">failing {part.name}</Link> is a common cause for this issue. This part is critical for maintaining fuel efficiency and engine stability in high-mileage trucks.
                      </p>

                      <div className="space-y-4">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Step-by-Step Diagnostic</p>
                        {matchedSymptom?.diagnostic_steps.map((step, i) => (
                          <div key={i} className="flex gap-3 text-sm text-zinc-600">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center font-bold text-xs">{i + 1}</span>
                            <p>{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-64">
                      <div className="bg-zinc-50 rounded-xl p-6 text-center">
                        <p className="text-zinc-400 text-xs mb-1 uppercase font-bold tracking-widest">Est. Part Price</p>
                        <p className="text-3xl font-black mb-6">${part.price.toFixed(2)}</p>
                        <Link href={`/part/${part.part_number}`}>
                          <Button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold h-12">
                            View compatible parts
                          </Button>
                        </Link>
                        <a href={`https://amazon.com/s?k=${part.brand}+${part.part_number}`} target="_blank" className="text-[10px] text-zinc-400 mt-4 block underline uppercase tracking-widest font-bold">
                          Check Prime Availability
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparison Bridge: Which one to buy? */}
          <div className="mt-16 bg-orange-50 border-2 border-orange-100 rounded-3xl p-8">
            <div className="flex items-start gap-6">
              <div className="bg-orange-600 p-3 rounded-2xl text-white">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2">Can't decide on a brand?</h3>
                <p className="text-zinc-600 mb-6 font-medium">
                  We've compared the top-rated {firstPart.category} brands for your truck. See the winner for durability, price, and noise.
                </p>
                <Link href={`/compare/best-${slugify(firstPart.category)}-chevy-silverado-1500`}>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-black h-12 px-8">
                    Read Comparison Guide
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Troubleshooting */}
          <div className="mt-8 bg-zinc-900 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Related Troubleshooting</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[...relatedSymptoms, ...otherRelatedSymptoms].map((s, i) => (
                <Link key={i} href={`/symptom/${slugify(s.description)}`} className="flex items-center justify-between p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors">
                  <span className="font-medium">{s.description}</span>
                  <ArrowRight size={18} className="text-zinc-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-zinc-50 py-16 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">PartsDirect Technical Network © 2026</p>
        </div>
      </footer>
    </div>
  );
}
