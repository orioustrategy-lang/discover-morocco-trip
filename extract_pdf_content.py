"""
PDF Content Extractor for Morocco Trip Experiences
Extracts structured information from PDF files about tours and experiences.
"""

import pdfplumber
import os
import json
import re

# PDF files to extract
PDF_FILES = [
    r"src\data\Private Transport for Tours & Trips Across Morocco 247.pdf",
    r"src\data\Relaxing Hammam and Massage at Casablanca.pdf",
    r"src\data\Dinner and DJ Night on The James Rooftop An Elevated Casablanca .pdf",
    r"src\data\⭐ 8-Day Morocco Discovery Tour Casablanca • Rabat • Fes • Marrakech • Sahara Desert • Casablanca Airport. +2.pdf"
]

def extract_text_from_pdf(pdf_path):
    """Extract all text content from a PDF file."""
    full_text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page_num, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                if text:
                    full_text += f"\n--- Page {page_num} ---\n"
                    full_text += text
    except Exception as e:
        return f"Error reading PDF: {str(e)}"
    return full_text

def extract_info_from_text(text, filename):
    """Parse extracted text to find structured information."""
    info = {
        "filename": filename,
        "raw_text": text,
        "title": "",
        "description": "",
        "price": "",
        "duration": "",
        "included": [],
        "not_included": [],
        "highlights": [],
        "group_size": "",
        "itinerary": [],
        "meeting_point": "",
        "additional_info": []
    }
    
    # Try to extract title (usually first significant line)
    lines = text.strip().split('\n')
    for line in lines:
        line = line.strip()
        if len(line) > 10 and not line.startswith('---'):
            info["title"] = line
            break
    
    # Look for price patterns
    price_patterns = [
        r'(?:Price|Cost|From|Starting)[\s:]*([€$£]?\s*[\d,]+(?:\.\d{2})?(?:\s*(?:USD|EUR|MAD|per person|/person))?)',
        r'([€$£]\s*[\d,]+(?:\.\d{2})?)',
        r'([\d,]+(?:\.\d{2})?\s*(?:USD|EUR|MAD))',
    ]
    for pattern in price_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            info["price"] = match.group(1).strip()
            break
    
    # Look for duration
    duration_patterns = [
        r'(?:Duration|Length|Time)[\s:]*([^\n]+)',
        r'(\d+[\s-]*(?:hours?|days?|nights?))',
        r'(\d+H\d*M?)',
    ]
    for pattern in duration_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            info["duration"] = match.group(1).strip()
            break
    
    # Look for group size
    group_patterns = [
        r'(?:Group size|Max|Maximum|Capacity)[\s:]*([^\n]+)',
        r'(?:up to|max)\s*(\d+)\s*(?:people|persons|guests|travelers)',
    ]
    for pattern in group_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            info["group_size"] = match.group(1).strip()
            break
    
    return info

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    results = []
    
    print("=" * 80)
    print("PDF CONTENT EXTRACTION - Morocco Trip Experiences")
    print("=" * 80)
    
    for pdf_file in PDF_FILES:
        pdf_path = os.path.join(base_dir, pdf_file)
        filename = os.path.basename(pdf_file)
        
        print(f"\n{'='*80}")
        print(f"EXTRACTING: {filename}")
        print("=" * 80)
        
        if not os.path.exists(pdf_path):
            print(f"ERROR: File not found: {pdf_path}")
            continue
        
        # Extract text
        text = extract_text_from_pdf(pdf_path)
        
        # Print the raw extracted text
        print("\n--- EXTRACTED TEXT ---\n")
        print(text)
        print("\n" + "-" * 40)
        
        # Try to parse structured info
        info = extract_info_from_text(text, filename)
        results.append(info)
        
        # Print parsed info
        print("\n--- PARSED INFORMATION ---")
        print(f"Title: {info['title']}")
        print(f"Price: {info['price']}")
        print(f"Duration: {info['duration']}")
        print(f"Group Size: {info['group_size']}")
    
    # Save results to JSON
    output_path = os.path.join(base_dir, "src", "data", "extracted_pdf_content.json")
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n\nResults saved to: {output_path}")
    
    return results

if __name__ == "__main__":
    main()
