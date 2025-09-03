# Remove blue drop shadow from product image
/filter: 'drop-shadow(0 0 40px rgba(0, 100, 255, 0.25))',/c\
                    filter: 'drop-shadow(0 0 40px rgba(50, 50, 50, 0.4))',

# Remove blue glow effect div completely
/\/\* Blue glow effect \*\//,/\/>$/d

# Change background gradient to be less blue
/bg-gradient-to-br from-black via-\[#000033\] to-\[#000066\]/c\
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111111] to-[#222222]" />
