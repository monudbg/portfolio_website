from django.core.management.base import BaseCommand
from api.models import Profile, Skill, Project

class Command(BaseCommand):
    help = 'Seed the database with Monu Manish portfolio data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        Profile.objects.all().delete()
        Skill.objects.all().delete()
        Project.objects.all().delete()

        # Create Profile
        profile = Profile.objects.create(
            name='Monu Manish',
            title='AI/ML Engineer',
            bio='AI/ML engineer with hands-on experience designing LLM pipelines, multi-agent AI systems, and RAG applications across 3+ production projects. Proficient in Python, TensorFlow, PyTorch, and NLP. I have solved 1000+ DSA problems across various platforms like LeetCode and Codolio; seeking to build scalable, high-impact AI solutions.',
            email='monumanish9873@gmail.com',
            linkedin='https://linkedin.com/in/monu-manish-64145428a',
            github='https://github.com/monudbg',
            leetcode='https://leetcode.com/u/monumanish9873/',
            codolio='https://codolio.com/profile/monumanish9873',
            resume='resume/resume.pdf'
        )

        # Create Skills
        skills_data = [
            ('Python', 'Languages', 95),
            ('C++', 'Languages', 85),
            ('SQL', 'Languages', 80),
            ('TensorFlow', 'ML/DL', 90),
            ('PyTorch', 'ML/DL', 85),
            ('Scikit-learn', 'ML/DL', 90),
            ('LangChain', 'LLM/GenAI', 95),
            ('RAG', 'LLM/GenAI', 95),
            ('GPT/Llama', 'LLM/GenAI', 90),
            ('Transformers', 'NLP', 85),
            ('NLTK', 'NLP', 80),
            ('Django', 'Tools', 85),
            ('Docker', 'Tools', 75),
            ('FastAPI', 'Tools', 80),
        ]
        for name, cat, level in skills_data:
            Skill.objects.create(name=name, category=cat, level=level)

        # Create Projects
        Project.objects.create(
            title='AI Agents for Medical Diagnostics',
            description='Designed a multi-agent AI system with 3 GPT-powered specialist agents running in parallel via Python threading, reducing diagnostic report analysis time by 3x over sequential processing. Architected a RAG pipeline using LangChain, FAISS, and Hugging Face Sentence Transformers.',
            tech_stack='Python, LLM, LangChain, GPT, RAG, Multi-Agent AI',
            github_link='https://github.com/monudbg/AI-Agents-for-Medical-Diagnostics',
            year='2024'
        )
        Project.objects.create(
            title='HIA -- Health Insights Agent',
            description='Developed a production AI web application (Django + Groq Llama 3.3-70B) for real-time blood-test PDF analysis; app handles 5+ specialist health metrics per report with sub-second response time.',
            tech_stack='Python, Groq, Llama 3.3-70B, LangChain, Django, RAG',
            github_link='https://github.com/monudbg/hia',
            year='2024'
        )
        Project.objects.create(
            title='Movie Recommendation System',
            description='Designed a content-based recommendation engine using cosine similarity over TF-IDF + Word2Vec on TMDB 5000 dataset (4,800+ movies), delivering personalised top-10 movie suggestions.',
            tech_stack='Python, Machine Learning, Scikit-learn, NLP, Django, Data Science',
            github_link='https://github.com/monudbg/Movie-Recommender-System-Using-Machine-Learning',
            year='2024'
        )

        self.stdout.write(self.style.SUCCESS('Successfully seeded portfolio data'))
