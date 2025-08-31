
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Github, ExternalLink, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null);

  const togglePaper = (paperId: string) => {
    setExpandedPaper(expandedPaper === paperId ? null : paperId);
  };

  const openPDF = (pdfName: string) => {
    // This would open the PDF - you can replace with actual PDF URLs
    window.open(`/pdfs/${pdfName}.pdf`, '_blank');
  };

    const openPPT = (pptName: string) => {
   // This would open the PPT
   window.open(`/ppts/${pptName}.pptx`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                4girls UML Project
              </h1>
              <p className="text-sm text-gray-600">Seminar 2025</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              <a href="#team" className="text-gray-700 hover:text-pink-600 transition-colors">Team</a>
              <a href="#papers" className="text-gray-700 hover:text-pink-600 transition-colors">Research</a>
              <a href="#system" className="text-gray-700 hover:text-pink-600 transition-colors">Our System</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Development of a UML Diagram Generation System
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Using Language Models
          </p>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              In an era of rapid development and AI-based tools, we identified a need for a system that enables 
              fast, accurate, and interactive creation of UML diagrams from textual descriptions or images. 
              Our system uses GPT-4 for accuracy, consistency, and PlantUML compatibility.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-4 py-2">GPT-4.1</Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2">PlantUML</Badge>
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-4 py-2">Streamlit</Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2">FastAPI</Badge>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">
              <Users className="inline-block mr-3 text-pink-600" size={40} />
              Team Members
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In the first semester, we divided into two sub-groups, each choosing a different paper in the field 
              and presenting it, to develop a broad understanding of existing tools and challenges in the field.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Nadine Zeibaq" },
              { name: "Marcel Jaber" },
              { name: "Mariana Dakwar" },
              { name: "Vivian Botros" }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-pink-100 hover:border-pink-200">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <CardTitle className="text-gray-800">{member.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section id="papers" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">
              <BookOpen className="inline-block mr-3 text-purple-600" size={40} />
              Papers We Studied
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-purple-100">
              <CardHeader>
                <CardTitle className="text-purple-700 text-xl flex items-center justify-between">
                  <span>Paper 1: "Teaching UML using a RAG-based LLM"</span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openPDF('paper1')}
                      className="text-purple-700 border-purple-300 hover:bg-purple-50"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      PDF
                    </Button>

                     {/* PPT button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openPPT("paper1")}
                      className="text-purple-700 border-purple-300 hover:bg-purple-50"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      Download PPT
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePaper('paper1')}
                      className="text-purple-700"
                    >
                      {expandedPaper === 'paper1' ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Improving UML teaching using RAG technology</CardDescription>
                <div className="text-sm text-purple-600 font-medium">
                  Team Members: Nadine and Mariana
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The paper examines how RAG (Retrieval Augmented Generation) improved understanding and accuracy 
                  in evaluating student diagrams and providing intelligent feedback.
                </p>
                {expandedPaper === 'paper1' && (
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">What We Learned:</h4>
                      <p className="text-sm text-gray-700">
                        Combining external knowledge and using intelligent interaction enables quality feedback and active learning. 
                        RAG provides relevant context that improves accuracy.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Key Takeaways for the Upcoming Project:</h4>
                      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                        <li>Modelset from the UML RAG-based paper is beneficial - we aim to use it in our project</li>
                        <li>Combining multiple knowledge sources improves result quality</li>
                        <li>Personalization of the learning process</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-pink-100">
              <CardHeader>
                <CardTitle className="text-pink-700 text-xl flex items-center justify-between">
                  <span>Paper 2: "From Image to UML"</span>
                  <div className="flex gap-2">
                    {/* PDF button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openPDF("paper2")}
                      className="text-pink-700 border-pink-300 hover:bg-pink-50"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      PDF
                    </Button>

                    {/* PPT button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openPPT("paper2")}
                      className="text-pink-700 border-pink-300 hover:bg-pink-50"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      Download PPT
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePaper('paper2')}
                      className="text-pink-700"
                    >
                      {expandedPaper === 'paper2' ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Translating hand-drawn UML diagrams to PlantUML code</CardDescription>
                <div className="text-sm text-pink-600 font-medium">
                  Team Members: Marcel and Viviann
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This paper tests whether multimodal LLMs can turn images of hand-drawn UML class diagrams into machine-readable models (PlantUML) to speed up “low-modeling.”
                   The authors evaluate GPT-4V, Gemini Pro/Ultra, and CogVLM across diagrams of increasing complexity and with different prompts, scoring completeness and syntax. 
                   GPT-4V performs best (no syntax errors in the runs), while Gemini/CogVLM often make syntax mistakes or refuse outputs; accuracy drops as diagrams get more complex, and surprisingly, more detailed prompts tend to hurt results.
                </p>
                {expandedPaper === 'paper2' && (
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">What We Learned:</h4>
                      <p className="text-sm text-gray-700">
                        Image→UML via LLMs is feasible
                        GPT-4V was the most accurate but still requires human judgment. 
                        We understood the importance of validation and the limitations of automated tools.
                      </p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">Key Takeaways for the Upcoming Project:</h4>
                      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                        We applied two ideas from the paper to our UML generator, which runs on OpenAI. Since we’re using OpenAI models, we set PlantUML as the default output: the study showed GPT-4V had zero syntax errors across 36 runs with PlantUML, while Gemini/CogVLM often made syntax mistakes or refused to generate code, and the authors suggest PlantUML likely works better because it’s common in training data.
                        We also kept the system prompt very short—the paper compared short, medium, and long prompts and found the short one gave the best accuracy, especially as diagrams got more complex—so we trimmed ours to the basics and saw cleaner results.
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Section */}
      <section id="system" className="py-20 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">The System We Built</h3>
            <p className="text-lg text-gray-600">Smart workflow from text to UML diagram</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-pink-200">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <CardTitle className="text-pink-700">User Input</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">User types a textual description of the desired diagram</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <CardTitle className="text-purple-700">GPT-4.1 Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">System sends input to GPT-4.1 to generate PlantUML code</p>
              </CardContent>
            </Card>

            <Card className="text-center border-pink-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <CardTitle className="text-gray-700">Real-time Display</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Diagram is displayed to user with editing and improvement options</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/70 backdrop-blur-sm border-pink-100">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Technologies and Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-pink-700 mb-3">Our Technologies:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Frontend:</strong> Streamlit - Simple and intuitive interface</li>
                    <li>• <strong>Backend:</strong> FastAPI - Fast and efficient communication</li>
                    <li>• <strong>LLM:</strong> GPT-4.1 - High accuracy and consistency</li>
                    <li>• <strong>Diagram Engine:</strong> PlantUML - Extensive support for diagram types</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Challenges We Solved:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Managing context memory in long conversations</li>
                    <li>• Handling API issues and system stability</li>
                    <li>• Optimizing response times for users</li>
                    <li>• Validation and quality checking of diagrams</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Takeaways & Evaluation */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-pink-100">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-700">Key Lessons and Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Understanding capabilities and limitations of LLMs in practical projects</li>
                  <li>• Importance of working with APIs and handling technical challenges</li>
                  <li>• Designing user-friendly interfaces for complex tools</li>
                  <li>• Combining academic research with practical development</li>
                  <li>• Effective teamwork and task distribution</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">System Evaluation and Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">What Worked Well:</h4>
                    <p className="text-sm text-gray-700">High accuracy in Class diagrams, intuitive interface, reasonable response times</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Future Improvements:</h4>
                    <p className="text-sm text-gray-700">Enhanced feedback system</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Files and Demo</h3>
            <p className="mb-8 text-pink-100">Access the full code and system demonstration</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
  href="https://drive.google.com/uc?export=download&id=1PU7XWGpmuodOSB0jLePGljI6lrHoC_hL"
  download
>
  <Button
    variant="secondary"
    className="bg-white text-purple-700 hover:bg-gray-100"
  >
    <ExternalLink className="mr-2" size={16} />
    Download UML Generator
  </Button>
</a>


              <a href="/manual.pdf" download>
                 <Button variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
                  <ExternalLink className="mr-2" size={16} />
                   Download Manual
                 </Button>
                 </a>

            </div>
            <div className="mt-8 pt-8 border-t border-pink-400">
              <p className="text-pink-200">© 2025 4girls UML Seminar Project - All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
