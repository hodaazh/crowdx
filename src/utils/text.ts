class TextUtil {
  putCommas = (value?: string): string | undefined => {
    if (!value || typeof value === 'undefined') return value;
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  hasNumber = (term: string): boolean => {
    return /\d/.test(term);
  };

  toEnglishDigits = (value: string) => {
    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    let e = '۰'.charCodeAt(0);
    let str = value.replace(/[۰-۹]/g, (t: string): string =>
      String(t.charCodeAt(0) - e)
    );
    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, (t: string): string =>
      String(t.charCodeAt(0) - e)
    );
    return str;
  };

  toArabicDigits(value?: string): string {
    if (!value) return '';
    const faNum = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value.replace(/[0-9]/g, (w: string): string => faNum[+w] || '');
  }

  etcString(str?: string, count: number = 10): string {
    if (!str) return '';
    return str.length < count ? str : `${str.slice(0, count - 2)}...`;
  }

  commifyNumber(str: string | null | undefined | number): string {
    if (Number(str) > 10000) return '10000+';
    if (Number(str) > 5000) return '5000+';
    if (Number(str) > 1000) return '1000+';
    if (Number(str) > 500) return '500+';
    if (Number(str) > 100) return '100+';
    return String(str);
  }

  toSlug(str: string | null | undefined): string {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }
}

const textUtil = new TextUtil();
export { textUtil };
